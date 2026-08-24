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
   hugo mod init github.com/username-kamu/repo-kamu
   ```
2. Tambahkan modul ke dalam `hugo.yaml`:
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
2. Aktifkan tema di dalam `hugo.yaml`:
   ```yaml
   theme: "catatan-hugo"
   ```

## Konfigurasi

Untuk melihat contoh konfigurasi lengkap secara menyeluruh, silakan lihat file [`exampleSite/hugo.yaml`](exampleSite/hugo.yaml).

**Mengaktifkan Pencarian:**
Agar fitur pencarian berfungsi, konfigurasikan Hugo untuk menghasilkan indeks JSON pada beranda (homepage). Tambahkan ini ke `hugo.yaml`:
```yaml
outputs:
  home: ["HTML", "JSON"]
```

## Struktur Konten

Catatan Hugo secara dinamis beradaptasi dengan konten. Kamu tidak dibatasi pada bagian-bagian (sections) yang telah ditentukan sebelumnya.
Buat folder apa pun yang diinginkan (misalnya, `/proyek` atau `/portfolio`) di dalam direktori `content/`. Tambahkan `_index.md`, dan tema akan secara otomatis merender tata letak dan memuat gambar apa pun yang kamu masukkan ke dalam folder tersebut.

**Menu Sidebar Otomatis:**
Secara bawaan, menu di sidebar akan otomatis menampilkan semua folder konten yang kamu buat. Namun, jika kamu ingin mengatur urutannya secara manual, kamu bisa menimpanya melalui konfigurasi `menus` di `hugo.yaml` dengan parameter `weight` (angka lebih kecil = posisi lebih atas):
```yaml
menus:
  main:
    - name: "About"
      url: "/"
      weight: 1
    - name: "Proyek"
      url: "/proyek/"
      weight: 2
```

**Sorotan Beranda (Homepage Highlights):**
Tambahkan `featured: true` ke dalam front matter di post mana pun, dan post tersebut akan secara otomatis ditarik ke halaman depan.

## Menjalankan Situs Contoh (Example Site)
```bash
cd exampleSite
hugo server --themesDir ../..
```
*(Catatan: Direktori `exampleSite` menggunakan gambar placeholder dari Wikimedia Commons untuk mendemonstrasikan estetika arsip.)*
