SELECT id, username, email 
FROM users 
WHERE active = 1 
ORDER BY created_at DESC;
