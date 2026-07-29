# Enkla instruktioner för Kvalitetsplan-appen

## 1. Vad vi har gjort nu

- Full interaktiv kvalitetsplan-sida (alla viktiga blanketter som klickbara checklistor och formulär)
- Dashboard-sida
- PDF-export-sida (mock)
- HTML-demo som du kan öppna direkt

Öppna filen: **index.html** i din webbläsare.

---

## 2. Supabase + databas (nästa steg)

Gör så här:

1. Gå till supabase.com och skapa gratis projekt.
2. Skapa två tabeller:

```sql
-- Användare
create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique,
  company text,
  created_at timestamp default now()
);

-- Planer
create table plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  title text,
  data jsonb,
  created_at timestamp default now()
);
```

3. Sätt på Row Level Security (RLS) så att varje användare bara ser sina egna planer.

4. Kopiera URL och anon-key till .env.local i din Next.js-app.

---

## 3. Fler sidor i Next.js

Skapa dessa mappar i app/:

- app/dashboard/page.tsx → lista över planer
- app/plan/[id]/page.tsx → redigera en plan
- app/plan/ny/page.tsx → skapa ny plan
- app/export/page.tsx → PDF

Använd shadcn/ui för knappar, input och card.

---

## 4. Hur du öppnar demon

1. Ladda ner mappen kvalitetsplan-app
2. Dubbelklicka på index.html
3. Den öppnas i webbläsaren
4. Prova att fylla i och spara (sparas i webbläsaren)

Det är allt. Enkelt och klart.
