# TODO: Convert Submenus to Modal Dialogs

## Overview
Convert all submenus in penjualan, pembelian, master-data, laporan, and settings from separate pages to modal dialogs.

## Steps

### 1. Update nav-items.ts
- [x] Change href to modalId for all relevant subItems in penjualan, pembelian, master-data, laporan, settings

### 2. Update use-app-layout.ts
- [x] Add new ModalId types for all new modals

### 3. Create Modal Components
- [x] Penjualan: cetak-pricetag-barcode-modal.tsx
- [ ] Pembelian: order-pembelian-modal.tsx
- [ ] Pembelian: penerimaan-barang-modal.tsx
- [ ] Pembelian: bayar-hutang-modal.tsx
- [ ] Pembelian: retur-pembelian-per-barang-modal.tsx
- [ ] Pembelian: konsinyasi-masuk-modal.tsx
- [ ] Pembelian: konsinyasi-penyelesaian-modal.tsx
- [ ] Pembelian: pengiriman-antar-cabang-modal.tsx
- [ ] Pembelian: penerimaan-antar-cabang-modal.tsx
- [ ] Pembelian: so-berjalan-modal.tsx
- [ ] Pembelian: so-kilat-modal.tsx
- [ ] Pembelian: data-jsm-modal.tsx
- [ ] Pembelian: data-tebus-murah-modal.tsx
- [ ] Pembelian: promo-barang-modal.tsx
- [ ] Pembelian: voucher-modal.tsx
- [ ] Pembelian: desain-brosur-modal.tsx
- [ ] Pembelian: cetak-barcode-modal.tsx
- [ ] Master Data: daftar-barang-modal.tsx
- [ ] Master Data: daftar-pemasok-modal.tsx
- [ ] Master Data: daftar-pelanggan-modal.tsx
- [ ] Master Data: daftar-karyawan-modal.tsx
- [ ] Master Data: daftar-salesman-modal.tsx
- [ ] Master Data: data-divisi-modal.tsx
- [ ] Master Data: data-kelompok-barang-modal.tsx
- [ ] Master Data: data-tipe-jual-modal.tsx
- [ ] Master Data: data-rak-modal.tsx
- [ ] Master Data: data-satuan-modal.tsx
- [ ] Master Data: data-cabang-modal.tsx
- [ ] Master Data: data-bank-ewallet-modal.tsx
- [ ] Master Data: data-jabatan-modal.tsx
- [ ] Laporan: penjualan-statistik-modal.tsx
- [ ] Laporan: penjualan-monitoring-modal.tsx
- [ ] Laporan: laporan-penjualan-modal.tsx
- [ ] Laporan: piutang-usaha-modal.tsx
- [ ] Laporan: penjualan-per-item-modal.tsx
- [ ] Laporan: penjualan-per-kelompok-modal.tsx
- [ ] Laporan: penjualan-per-pemasok-modal.tsx
- [ ] Laporan: laba-kotor-modal.tsx
- [ ] Laporan: rekonsiliasi-kasir-modal.tsx
- [ ] Laporan: pembelian-statistik-modal.tsx
- [ ] Laporan: transaksi-pembelian-modal.tsx
- [ ] Laporan: hutang-usaha-modal.tsx
- [ ] Laporan: retur-pembelian-modal.tsx
- [ ] Laporan: stok-statistik-modal.tsx
- [ ] Laporan: kartu-stok-modal.tsx
- [ ] Laporan: nilai-persediaan-modal.tsx
- [ ] Laporan: stok-minimum-modal.tsx
- [ ] Laporan: stok-maximum-modal.tsx
- [ ] Laporan: stok-opname-modal.tsx
- [ ] Settings: profil-toko-modal.tsx
- [ ] Settings: pengaturan-ppob-modal.tsx
- [ ] Settings: export-import-modal.tsx
- [ ] Settings: seting-poin-modal.tsx
- [ ] Settings: manajemen-pengguna-modal.tsx
- [ ] Settings: manajemen-hak-akses-modal.tsx
- [ ] Settings: log-aktivitas-modal.tsx
- [ ] Settings: backup-restore-modal.tsx
- [ ] Settings: reset-data-modal.tsx
- [ ] Settings: printer-kasir-modal.tsx
- [ ] Settings: printer-barcode-modal.tsx
- [ ] Settings: aktivasi-permanen-modal.tsx
- [ ] Settings: aktivasi-bulanan-modal.tsx
- [ ] Settings: keygen-bulanan-modal.tsx
- [ ] Settings: validator-lisensi-modal.tsx

### 4. Update app-layout-provider.tsx
- [x] Import all new modal components
- [ ] Add all new modals to the provider

### 5. Test and Verify
- [ ] Ensure all modals open correctly from navigation
- [ ] Verify functionality within modals
- [ ] Check for any errors or broken features

## Notes
- Each modal should wrap the content of the corresponding page
- Use Dialog components from UI library
- Maintain all functionality from original pages
- Update back buttons to close modal instead of navigating
