# Setup Printer Thermal - Menghilangkan "localhost" saat Print

## Masalah Sebelumnya
- Aplikasi menggunakan `window.print()` yang menampilkan URL localhost di header print
- Tidak ada kontrol langsung ke printer thermal
- User harus selalu menggunakan browser print dialog

## Solusi Baru
Sistem printer thermal yang terintegrasi dengan fallback ke browser print.

## Fitur Baru

### 1. Print Method Modal
Ketika user menekan print, akan muncul modal dengan 3 pilihan:
- **Printer Thermal (Recommended)**: Cetak langsung tanpa dialog browser
- **Browser Print (Fallback)**: Backup jika printer thermal tidak tersedia
- **Pengaturan Printer**: Link ke konfigurasi printer

### 2. Thermal Printer Support
- **USB Connection**: Menggunakan Web Serial API
- **Network/IP Connection**: Via TCP socket (memerlukan backend)
- **Format ESC/POS**: Standard untuk printer thermal
- **Auto formatting**: Otomatis format struk sesuai lebar kertas (58mm/80mm)

### 3. Fallback System
- Jika printer thermal gagal, otomatis fallback ke browser print
- Browser print page sekarang memiliki tombol manual print
- Tetap menghilangkan auto-print yang mengganggu

## Cara Setup

### Untuk USB Printer
1. Buka **Settings > Pengaturan Printer Kasir**
2. Pilih **Koneksi: USB**
3. Pastikan printer thermal sudah terhubung via USB
4. Klik **Test Cetak Struk** untuk verifikasi
5. Browser akan meminta permission untuk akses serial port

### Untuk Network/IP Printer
1. Buka **Settings > Pengaturan Printer Kasir**
2. Pilih **Koneksi: Jaringan (IP)**
3. Masukkan IP Address printer (contoh: 192.168.1.100)
4. Klik **Test Cetak Struk** untuk verifikasi
5. Pastikan printer dapat diakses via network

### Untuk Bluetooth Printer (Coming Soon)
Implementasi Bluetooth akan ditambahkan di versi mendatang.

## Penggunaan

### 1. Print dari Kasir
- Setelah transaksi selesai, klik tombol print
- Pilih "Printer Thermal" dari modal
- Struk akan langsung dicetak tanpa dialog browser
- Jika gagal, bisa pilih "Browser Print" sebagai backup

### 2. Reprint Transaksi
- Gunakan fitur Reprint (F6) di kasir
- Pilih transaksi yang ingin di-print ulang
- Sistem akan menggunakan method yang sama

### 3. Test Print dari Settings
- Buka **Settings > Pengaturan Printer Kasir**
- Klik **Tes Cetak Struk** untuk test printer
- Klik **Tes Buka Laci** untuk test cash drawer

## Format Struk

### ESC/POS Commands
Sistem menggunakan standard ESC/POS commands:
- Initialize: `ESC @`
- Font selection: `ESC M`
- Bold text: `ESC E`
- Double width/height: `GS !`
- Cut paper: `GS V A`

### Receipt Layout
- **Header**: Nama toko, alamat, telepon
- **Transaction Info**: No struk, tanggal, waktu, kasir
- **Items**: Nama barang, qty × harga = total
- **Payment**: Subtotal, diskon, total, pembayaran, kembalian
- **Footer**: Pesan terima kasih

## Browser Compatibility

### Web Serial API (USB)
Didukung di:
- ✅ Chrome/Chromium 89+
- ✅ Edge 89+
- ❌ Firefox (belum support)
- ❌ Safari (belum support)

### Network Printing
- Memerlukan backend service atau Tauri command
- Tidak bisa dilakukan langsung dari browser web

## Troubleshooting

### USB Printer Tidak Terdeteksi
1. Pastikan printer sudah terhubung dan menyala
2. Coba cabut-pasang kabel USB
3. Restart browser dan aplikasi
4. Pastikan driver printer sudah terinstall

### Network Printer Tidak Terhubung
1. Ping IP address printer dari command prompt
2. Pastikan printer dan komputer di network yang sama
3. Cek firewall yang mungkin memblokir koneksi
4. Pastikan printer sudah dikonfigurasi untuk network printing

### Print Quality Issues
1. Cek kertas thermal masih ada dan terpasang benar
2. Bersihkan head printer thermal
3. Adjust heat setting di printer (jika ada)
4. Pastikan kertas ukuran yang benar (58mm/80mm)

## Development Notes

### File-file Penting
- `hooks/use-thermal-printer.ts`: Hook utama untuk thermal printing
- `lib/receipt-formatter.ts`: Format dan generate ESC/POS commands
- `components/cashier/print-method-modal.tsx`: Modal pilihan print method
- `app/api/print/route.ts`: API endpoint untuk network printing
- `app/kasir/print/page.tsx`: Fallback browser print page

### Untuk Tauri Desktop App
Jika menggunakan Tauri, tambahkan commands:
- `print_via_serial`: Untuk USB printing
- `print_via_network`: Untuk network printing
- `open_cash_drawer`: Untuk buka laci kasir

### Extending Functionality
- Tambah support printer lain (EPSON, Star, dll)
- Custom receipt templates
- QR code printing
- Logo/image printing
- Multiple receipt copies

## Testing
1. Test dengan printer thermal sungguhan
2. Verifikasi format output sesuai paper size
3. Test fallback ke browser print
4. Test error handling untuk printer offline
5. Test di berbagai browser yang support Web Serial API

---

**Note**: Sistem ini menghilangkan masalah "localhost" dengan memberikan opsi thermal printing yang langsung ke hardware, namun tetap menyediakan fallback browser printing untuk kompatibilitas.