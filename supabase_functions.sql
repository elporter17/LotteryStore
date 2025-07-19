-- Función para obtener todos los usuarios de auth.users
-- Esta función debe ejecutarse en el SQL Editor de Supabase

CREATE OR REPLACE FUNCTION get_all_users()
RETURNS TABLE (
  id uuid,
  email text,
  created_at timestamp with time zone,
  banned_until timestamp with time zone,
  raw_user_meta_data jsonb
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT 
    au.id,
    au.email,
    au.created_at,
    au.banned_until,
    au.raw_user_meta_data
  FROM auth.users au
  ORDER BY au.created_at DESC;
$$;

-- Dar permisos para que la función pueda ser ejecutada por usuarios autenticados
GRANT EXECUTE ON FUNCTION get_all_users() TO authenticated;

-- Función para crear un nuevo usuario (simplificada)
CREATE OR REPLACE FUNCTION create_new_user_simple(
  user_email text,
  user_role text,
  user_sucursal text DEFAULT ''
)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_user_id uuid;
  result json;
BEGIN
  -- Por ahora solo retornar un placeholder
  -- La creación real de usuarios requiere Service Role Key
  
  SELECT json_build_object(
    'success', false,
    'message', 'Creación de usuarios requiere permisos de administrador',
    'email', user_email,
    'role', user_role,
    'sucursal', user_sucursal
  ) INTO result;
  
  RETURN result;
END;
$$;

GRANT EXECUTE ON FUNCTION create_new_user_simple(text, text, text) TO authenticated;
