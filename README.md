# Catatan Hugo

![Theme Screenshot](https://raw.githubusercontent.com/bect/catatan-hugo/master/images/screenshot.png)

Sebuah tema Hugo bergaya arsip vintage dengan estetika mesin ketik dan fitur pencarian bawaan menggunakan Web Worker.

## Fitur
- Tipografi mesin ketik minimalis.
- Pencarian lokal sepenuhnya di sisi klien (Web Worker).
- Filter distorsi tinta dan noda kopi SVG dinamis.
- Tata letak arsip satu kolom yang responsif.

## Persyaratan
- Hugo Extended v0.165.0+

## Instalasi

### Metode 1: Hugo Modules (Disarankan)
1. Inisialisasi Hugo modules:
   ```bash
   hugo mod init github.com/username-anda/repo-anda
   ```
2. Tambahkan modul ke dalam `hugo.yaml` Anda:
   ```yaml
   module:
     imports:
       - path: github.com/bect/catatan-hugo
   ```

### Metode 2: Git Submodule
1. Kloning tema sebagai submodule:
   ```bash
   git submodule add https://github.com/bect/catatan-hugo.git themes/catatan-hugo
   ```
2. Aktifkan tema di dalam `hugo.yaml` Anda:
   ```yaml
   theme: "catatan-hugo"
   ```

## Konfigurasi

**Mengaktifkan Pencarian:**
Agar fitur pencarian berfungsi, konfigurasikan Hugo untuk menghasilkan indeks JSON pada beranda (homepage). Tambahkan ini ke `hugo.yaml` Anda:
```yaml
outputs:
  home: ["HTML", "JSON"]
```

## Struktur Konten

Catatan Hugo secara dinamis beradaptasi dengan konten Anda. Anda tidak dibatasi pada bagian-bagian (sections) yang telah ditentukan sebelumnya.
Buat folder apa pun yang Anda inginkan (misalnya, `/dossier` atau `/portfolio`) di dalam direktori `content/`. Tambahkan `_index.md`, dan tema akan secara otomatis merender tata letak dan memuat gambar apa pun yang Anda masukkan ke dalam folder tersebut.

**Sorotan Beranda (Homepage Highlights):**
Tambahkan `featured: true` ke dalam front matter di post mana pun, dan post tersebut akan secara otomatis ditarik ke halaman depan.

## Menjalankan Situs Contoh (Example Site)
```bash
cd exampleSite
hugo server --themesDir ../..
```
*(Catatan: Direktori `exampleSite` menggunakan gambar placeholder dari Wikimedia Commons untuk mendemonstrasikan estetika arsip.)*
