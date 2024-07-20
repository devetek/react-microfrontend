# Description

React micro frontend for dummy, fikiran yang hampir terealisasikan. Kami hampir menyebutnya "The Orchestrator" dimana aplikasi ini akan bertanggung jawab untuk mengkoleksi manifest dari sub aplikasi-aplikasi yang tergabung didalamnya. Mimpinya (Next, Remix, Internal Framework) dapat di orchestra. Namun sayangnya kucing gendut menyerang, ide ini hanya menjadi angan-angan namun tidak akan saya biarkan melayang.

## Konsep Kerja

Setiap sub aplikasi harus diwajibkan mengekspose manifest json yang mengandung entry point file javascript utama. Dimana kami dapat mengetahui dari json tersebut dimana lokasi file-file dependencies yang perlu di load. Sedangkan orchestrator hanya bertanggung jawab pada 2 hal utama "router" dan "global state".
