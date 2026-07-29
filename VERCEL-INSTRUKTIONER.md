# Steg-för-steg: Lansera appen på Vercel

Detta är den enklaste vägen. Du behöver inga avancerade kunskaper.

## 1. Förbered GitHub (redan klart)
Din kod ligger redan här:
https://github.com/PaddeFTW/kvalitetsplan-mall

## 2. Gå till Vercel
1. Öppna https://vercel.com
2. Logga in med ditt GitHub-konto (PaddeFTW)
3. Klicka på **Add New…** → **Project**

## 3. Importera projektet
1. Hitta **kvalitetsplan-mall** i listan
2. Klicka **Import**

## 4. Inställningar (lämna mest som det är)
- Framework Preset: Other (eftersom det just nu är en HTML-demo)
- Root Directory: lämna tomt
- Build Command: lämna tomt
- Output Directory: lämna tomt

Klicka **Deploy**

## 5. Klart!
Efter 30–60 sekunder får du en länk som ser ut ungefär så här:
https://kvalitetsplan-mall.vercel.app

Den länken kan du skicka till vem som helst.

## 6. När du senare bygger Next.js-appen
När du har en riktig Next.js-app:
1. Skapa en ny Vercel-projekt från samma GitHub-repo
2. Vercel känner automatiskt av Next.js
3. Lägg till miljövariabler:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY

## Tips
- Varje gång du pushar till GitHub uppdateras sidan automatiskt.
- Du kan ha både HTML-demo och Next.js-app i samma repo senare.

Det är allt. Nu är appen live på internet.
