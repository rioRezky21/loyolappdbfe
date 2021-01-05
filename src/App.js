import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Dashboard from './components/Dashboard/Dashboard'
import Dashboard2 from './components/Dasboard2/Dashboard2'
import LupaPassword from './components/Lupa-Password/LupaPassword'
import LupaPasswordNewLink from './components/Lupa-Password-New-Link/LupaPasswordNewLink'
import AccountDashboard from './components/Account-Dashboard/AccountDashboard'
import AccountDashboardVerifikasi from './components/Account-Dashboard-Verifikasi/AccountDashboardVerifikasi'
import PopupRegistrationTypeAturNama from './components/Popup-RegistrationType-AturNama/PopupRegistrationTypeAturNama'
import PopupGantiJalur from './components/Popup-Ganti-Jalur/PopupGantiJalur'
import AccDashboardPrestasiPraNotifikasiLolosSeleksi from './components/Account-Dashboard-Prestasi-Pra-Notifikasi-Lolos-Seleksi/AccountDashboardPrestasiPraNotifikasiLolosSeleksi'
import AccountDashboardTesOnlinePraNotifikasiLolosSeleksi from './components/Account-Dashboard-Tes-Online-Pra-Notifikasi-Lolos-Seleksi/AccountDashboardTesOnlinePraNotifikasiLolosSeleksi'
import AccDashboardPengisianDataAkademik from './components/Account-DashBoard-Pengisian-Data-Akademik/AccountDashBoardPengisianDataAkademik'
import Landing from './components/Landing-Page-Screen/LandingPageScreen'
import AccountDashboardPrestasi from './components/Account-Dashboard-Prestasi/AccountDashboardPrestasi'
import AccountDashboardPrestasiTahapAwalTerisi from './components/Account-Dashboard-Prestasi-Tahap-Awal-Terisi/AccountDashboardPrestasiTahapAwalTerisi'
import AccountDashboardPrestasiHasilLolos from './components/Account-Dashboard-Prestasi-Hasil-Lolos/AccountDashboardPrestasiHasilLolos'
import AccountDashboardTesOnlineNotifikasiLolosSeleksi from './components/Account-Dashboard-Tes-Online-Notifikasi-Lolos-Seleksi/AccountDashboardTesOnlineNotifikasiLolosSeleksi'
import PopupPetunjukPembayaran from './components/Popup-Petunjuk-Pembayaran/PopupPetunjukPembayaran'
import AccountDashboardTesOnlineNotifikasiTidakLolosSeleksi from './components/Account-Dashboard-Tes-Online-Notifikasi-Tidak-Lolos-Seleksi/AccountDashboardTesOnlineNotifikasiTidakLolosSeleksi'
import PopupKetentuan from './components/Popup-Ketentuan/PopupKetentuan'
import AccountDashboardTestOnline from './components/Account-Dashboard-Test-Online/AccountDashboardTestOnline'
import AccountDashboardPrestasiLolos from './components/Account-Dashboard-Prestasi-Notifikasi-Lolos-Seleksi/AccountDashboardPrestasiLolos'
import AccountDashboardPrestasiTidakLolos from './components/Account-Dashboard-Prestasi-Notifikasi-Tidak-Lolos/AccountDashboardPrestasiTidakLolos'
import AccDashboardPrestasiHasiTidakLolos from './components/Account-Dashboard-Prestasi-Hasil-Tidak-Lolos/AccountDashboardPrestasiHasilTidakLolos'
import PopupBantuan from './components/Popup-Bantuan/PopupBantuan'
import AccDashboardUjianStart from './components/Account-Dashboard-Tes-Online-Ujian-Akademik-Start-Page/UjianAkademikStartPage'
import AccountDashboardTestOnlineLolos from './components/Account-Dashboard-Test-Online-Lolos/AccountDashboardTestOnlineLolos'
import AccountDashboardTestOnlineTransferDariJalurPrestasi from './components/Account-Dashboard-Test-Online-Transfer-Dari-Jalur-Prestasi/AccountDashboardTestOnlineTransferDariJalurPrestasi'
import PopupKetentuanAwal from './components/Popup-Ketentuan-Awal/PopupKetentuanAwal'
import AccDashboardTesOnlineTahapAwalTerisi from './components/Account-Dashboard-Tes-Online-Tahap-Awal-Terisi/AccountDashboardTesOnlineTahapAwalTerisi'
import AccDashboardTesOnlineSoalPG from './components/Account-Dashboard-Test-Online-Soal-PG/TestOnlineSoalPG'
import AccountDashboardTesOnlineTidakLolos from './components/Account-Dashboard-Tes-Online-Tidak-Lolos/AccountDashboardTesOnlineTidakLolos'
import AccountDashboardNotifikasiSudahMelakukanDaftarUlang from './components/Account-Dashboard-Notifikasi-sudah-melakukan-daftar-ulang/AccountDashboardNotifikasiSudahMelakukanDaftarUlang'
import PopupIsiBiodataBiodataDiri from './components/Popup-Isi-Biodata-Biodata-Diri/PopupIsiBiodataBiodataDiri'
import AccDashboardTesOnlineUjianAkademikResult from './components/Account-Dashboard-Tes-Online-Ujian-Akademik-Result/AccountDashboardTesOnlineUjianAkademikResult'
import PopupIsiBiodataBiodataAyah from './components/Popup-Isi-Biodata-Biodata-Ayah/PopupIsiBiodataBiodataAyah'
import AccountDashboardUjianAkademikEssay from './components/Account-Dashboard-Tes-Online-Ujian-Akademik-Soal-Essay/AccountDashboardUjianAkademikEssay'

import MulaiUjianActiveState from './components/Mulai-Ujian-Active-State/MulaiUjianActiveState'
import SoalPGBergambar from './components/Account-Dashboard-Test-PG-Bergambar/TestSoalPGBergambar'
import SoalPGBergambar2 from './components/Account-Dashboard-Test-PG-Bergambar/TestSoalPGBergambar2'
import PopupIsiBiodataIbu from './components/Popup-Isi-Biodata-Biodata-Ibu/PopupIsiBiodataIbu'
import Frame36_UploadScanRapor from './components/Frame-36-Upload-Scan-Rapor/Frame36_UploadScanRapor'
import KartuPPDB from './components/Kartu-PPDB/KartuPPDB'
import PopupLihatFoto from './components/Popup-Lihat-Foto/LihatFoto'

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/"><Landing/></Route>
         <Route path="/landing-page-screen"><Landing/></Route>
         <Route path="/dashboard2"><Dashboard2/></Route>
         <Route path="/lupaPassword"><LupaPassword/></Route>
         <Route path="/lupaPasswordNewLink"><LupaPasswordNewLink/></Route>
         <Route path="/account-dashboard"><AccountDashboard/></Route>
         <Route path="/account-dashboard-verifikasi"><AccountDashboardVerifikasi/></Route>
         <Route path="/popup-ganti-jalur"><PopupGantiJalur/></Route>
         <Route path="/account-dashboard-prestasi-pra-notifikasi-lolos-seleksi"><AccDashboardPrestasiPraNotifikasiLolosSeleksi/></Route>
         <Route path="/TesOnlinePraNotifikasiLolosSeleksi"><AccountDashboardTesOnlinePraNotifikasiLolosSeleksi/></Route>
         <Route path="/account-dashboard-pengisian-data-akademik"><AccDashboardPengisianDataAkademik/></Route>
         <Route path="/popup-registration-type-atur-nama"><PopupRegistrationTypeAturNama/></Route>
         <Route path="/Account-Dashboard-Prestasi"><AccountDashboardPrestasi/></Route>
         <Route path="/Account-Dashboard-Prestasi-Tahap-Awal-Terisi"><AccountDashboardPrestasiTahapAwalTerisi/></Route>
         <Route path="/Account-Dashboard-Prestasi-Hasil-Lolos"><AccountDashboardPrestasiHasilLolos/></Route>
         <Route path="/TesOnlineNotifikasiLolosSeleksi"><AccountDashboardTesOnlineNotifikasiLolosSeleksi/></Route>
         <Route path="/popup-petunjuk-pembayaran"><PopupPetunjukPembayaran/></Route>
         <Route path="/TesOnlineNotifikasiTidakLolosSeleksi"><AccountDashboardTesOnlineNotifikasiTidakLolosSeleksi/></Route>
         <Route path="/popup-ketentuan"><PopupKetentuan/></Route>
         <Route path="/Account-Dashboard-Test-Online"><AccountDashboardTestOnline/></Route>
         <Route path="/account-dashboard-prestasi-notifikasi-lolos"><AccountDashboardPrestasiLolos/></Route>
         <Route path="/account-dashboard-prestasi-notifikasi-tidak-lolos"><AccountDashboardPrestasiTidakLolos/></Route>
         <Route path="/account-dashboard-prestasi-hasil-tidak-lolos"><AccDashboardPrestasiHasiTidakLolos/></Route>
         <Route path="/popup-bantuan"><PopupBantuan/></Route>
         <Route path="/Account-Dashboard-Tes-Online-Ujian-Akademik-Start-Page"><AccDashboardUjianStart/></Route>
         <Route path="/Account-Dashboard-Test-Online-Lolos"><AccountDashboardTestOnlineLolos/></Route>
         <Route path="/popup-ketentuan-awal"><PopupKetentuanAwal/></Route>
         <Route path="/account-dashboard-tes-online-tahap-awal-terisi"><AccDashboardTesOnlineTahapAwalTerisi/></Route>
         <Route path="/account-dashboard-tes-online-soal-pg"><AccDashboardTesOnlineSoalPG/></Route>
         <Route path="/account-dashboard-tes-online-tidak-lolos"><AccountDashboardTesOnlineTidakLolos/></Route>
         <Route path="/Account-Dashboard-Notifikasi-Sudah-melakukan-Daftar-Ulang"><AccountDashboardNotifikasiSudahMelakukanDaftarUlang/></Route>
         <Route path="/PopupIsiBiodataBiodataDiri"><PopupIsiBiodataBiodataDiri/></Route>
         <Route path="/account-dashboard-tes-online-ujian-akademik-result"><AccDashboardTesOnlineUjianAkademikResult/></Route>
         <Route path="/PopupIsiBiodataBiodataAyah"><PopupIsiBiodataBiodataAyah/></Route>
         <Route path="/Account-Dashboard-Test-Online-Transfer-Dari-Jalur-Prestasi"><AccountDashboardTestOnlineTransferDariJalurPrestasi/></Route>
         <Route path="/account-dashboard-ujian-akademik-soal-essay"><AccountDashboardUjianAkademikEssay/></Route>
         <Route path="/mulaiUjianActiveState"><MulaiUjianActiveState/></Route>
         
         <Route path="/test-soal-pg-bergambar"><SoalPGBergambar/></Route>
         <Route path="/test-soal-pg-bergambar-2"><SoalPGBergambar2/></Route>
         <Route path="/popup-isi-biodata-biodata-ibu"><PopupIsiBiodataIbu/></Route>
         <Route path="/frame36UploadScanRapor"><Frame36_UploadScanRapor/></Route>
         <Route path="/kartu-ppdb"><KartuPPDB/></Route>
         <Route path="/popup-lihat-foto"><PopupLihatFoto/></Route>

       </Switch>
     </Router>
    </div>
  );
}

export default App;      
