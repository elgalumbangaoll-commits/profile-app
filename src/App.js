import fotoku from './images/fotoku.jpeg'; 

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Profil Elga</h1>
      <p>Domisili: Sumatera Utara</p>
      <img 
        src={fotoku}
        alt="foto" 
        style={{ width: '200px' }} 
      />
      <p>Saya adalah mahasiswa Teknologi Informasi di Universitas Brawijaya dengan antusiasme 
        tinggi terhadap perkembangan ekosistem digital.<br></br> Fokus utama saya terletak pada 
        bidang Cyber Security, di mana saya mendalami strategi perlindungan data, analisis kerentanan sistem, dan mitigasi ancaman siber.
       <br></br> Sebagai calon praktisi TI, saya berkomitmen untuk terus mengasah kemampuan teknis 
        serta pemahaman mendalam mengenai keamanan informasi guna menghadapi tantangan keamanan 
        global yang kian kompleks. Melalui dedikasi dalam studi dan eksplorasi teknologi terbaru, 
        saya bertujuan untuk berkontribusi dalam membangun infrastruktur digital yang aman, 
        resilien, dan terpercaya bagi masyarakat luas.
      </p>
    </div>
  );
}

export default App;