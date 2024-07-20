# Description

React micro frontend for dummy, fikiran yang hampir terealisasikan. Kami hampir menyebutnya "The Orchestrator" dimana aplikasi ini akan bertanggung jawab untuk mengkoleksi manifest dari sub aplikasi-aplikasi yang tergabung didalamnya. Mimpinya (Next, Remix, Internal Framework) dapat di orchestra. Namun sayangnya kucing gendut menyerang, ide ini hanya menjadi angan-angan namun tidak akan saya biarkan melayang.

## Konsep Kerja

Setiap sub aplikasi harus diwajibkan mengekspose manifest json yang mengandung entry point file javascript utama. Dimana kami dapat mengetahui dari json tersebut dimana lokasi file-file dependencies yang perlu di load. Sedangkan orchestrator hanya bertanggung jawab pada 2 hal utama "router" dan "global state".

Untuk melakukan pengujian tahap awal, kamu perlu menjalankan 2 aplikasi:

1. [The Orchestrator](https://github.com/devetek/the-orchestrator)
2. [Micro Frontend 2](https://github.com/devetek/micro-frontend-2)

Untuk aplikasi `The Orchestrator`, cukup jalankan perintah remix seperti biasa. Ikuti langkah-langkah berikut:

1. npm i
2. npm run dev

Sedangkan untuk aplikasi `Micro Frontend 2`, kamu perlu melakukan build aplikasi dan menjalankan production preview. Karena di dalam development mode, file `manifest.json` tidak akan dibuat. Ikuti langkah-langkah berikut:

1. npm i
2. npm run build
3. npm run preview

Dan pastikan kamu dapat membuka halaman [http://localhost:4000/manifest.json](http://localhost:4000/manifest.json). Kemudian buka aplikasi utama di [http://localhost:3000/](http://localhost:3000/). Selanjutnya kamu dapat menambahkan sub aplikasi lain yang diperlukan.

## Batasan

Ide ini masih dalam proses pengembangan, belum dapat dipastikan akan stabil untuk kebutuhan production. Dibutuhkan pengembangan lebih jauh lagi.

Di dalam proses pengembangan, kamu akan menemukan isu [cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) saat melakukan hit ke origin yang berbeda misal dari `http://localhost:3000` ke `http://localhost:4000/manifest.json`. Untuk mengatasi masalah tersebut, kamu dapat menggunakan browser extension [CORS Unblock](https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino).
