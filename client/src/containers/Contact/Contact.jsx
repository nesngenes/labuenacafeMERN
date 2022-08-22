import React from 'react'
import './styles.css'

const Contact = () => {
  return (
    <div>

      <div className='project'>
        <h1>About This Project</h1>

        <p>LaBuena Cafe merupakan company website berjenis cafe yang saya buat dengan menggunakan teknologi MERN Stack. MERN Stack merupakan singkatan dari MongoDB, Express, React, NodeJS. Website ini juga dilengkapi dengan fasilitas geolocation untuk mengetahui letak cabang cafe melalui sebuah map. Fasilitas ini didapat dari API bernama MapBox. Untuk mempermudah penerapan API MapBox ke dalam aplikasi React digunakan tools bernama react-map-gl.</p>

        <p>Pada bagian authentication, pengguna dibagi menjadi dua jenis role (peran). Role pertama yaitu admin. Admin dapat menambahkan, mengedit, dan menghapus data cafe maupun data menu. Admin juga dapat melakukan registrasi (pendaftaran) akun admin yang baru. Sedangkan role user hanya dapat melihat informasi tentang cafe. Proses authentication ini menggunakan JWT untuk menghasilkan token. Selain itu pengguna dapat login menggunakan akun google dengan bantuan API google oauth.</p>

        <p>Proses fetching dan sending data ke backend saya menggunakan Axios. Saya tau website ini belum sempurna terutama di bagian UI karena saya masih harus belajar banyak di bagian css. Overall ini adalah projek MERN pertama yang saya kerjakan sendiri.</p>

        <p><b>The idea behind LaBuena Cafe:</b><br/> LaBuena adalah nama perusahaan fiksi yang artinya perusahaan ini tidak nyata dan merupakan hasil dari pemikiran saya. Ide nama LaBuena saya dapat dari salah satu judul lagu favorit saya yaitu Labuena vida yang artinya "kehidupan yang lebih baik". Selain itu saya memutuskan untuk membuat konsep cafe karena saya sangat amat menyukai kopi. Saya benar-benar tidak bisa hidup tanpa kopi! meskipun saya punya asam lambung tapi saya minum kopi setiap hari (jangan dicontoh). I love coffee so muchh. Konsep warna dalam website ini yaitu warna hijau karena adik laki-laki saya yang paling kecil sangat suka warna hijau. Warna hijau juga memberikan konsep segar yang bisa bikin stress hilang. Saya pernah membaca sebuah artikel kalau kita lagi stress, coba lihat yang hijau-hijau seperti pohon-pohonan dan daun-daunan dan lupa lagi. Semoga suatu hari nanti LaBuena cafe bisa saya realisasikan menjadi cafe sungguhan!!! aaa tidak sabar untuk minum kopi dan makan kue yang enak setiap hari hehehe . AMINNN AMINNNNN AMINNN BANGET.</p>
        

      </div>

      <div className='contact'> 
        <h1>Find me</h1>
        <div className='acc'>
          <p>discord - anes#6055</p>
          <a href='https://twitter.com/nesu102'>twitter</a>
          <p>gmail - mariabukanmonica@gmail.com</p>
          <a href='https://github.com/nesngenes'>github</a >
          <a href='https://www.linkedin.com/in/agnes-maria-8482831b7'>linkedin</a>
        </div>
      </div>

    </div>
  )
}

export default Contact