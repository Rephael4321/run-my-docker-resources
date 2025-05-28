RUN MY DOCKER

# Local Development

## Prerequisites

- `docker-compose -f docker-compose-dev.yml down -v && docker-compose -f docker-compose-dev.yml up -d`
- start the dev server - runmydocker-back directory
- once containers are up and server is running on 8081, connect to the db and create new user with:

```sql
INSERT INTO public.users (
        id,
        created_at,
        first_name,
        is_activated,
        last_name,
        old_created_at,
        password,
        phone,
        provider_id,
        registration_completed,
        role,
        username
    )
VALUES (
        1,
        '2025-05-23 13:27:26.172000',
        'admin',
        true,
        'admin',
        null,
        '$2a$10$nkjUsChBjOcy5IpKuCuRe.aJ8VdeuDDZpis/0Z31mqhUvaRRuUWxy',
        '+972-546594945',
        null,
        true,
        null,
        'admin@admin.com'
    );
```

- go to http://localhost:8081/swagger-ui.html

- after that, you can login and get jwt token by using the following credentials:
  - username: `admin@admin.com`
  - password: `admin`
