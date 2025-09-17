# Mass Update Report Printing dengan ESC/POS

Untuk mempercepat proses update semua laporan dari `window.print()` ke ESC/POS printing, berikut adalah panduan:

## Files yang Perlu Diupdate

### Laporan Penjualan
- ✅ `/app/laporan/penjualan/page.tsx` - SUDAH DIUPDATE
- `/app/laporan/penjualan/detail/page.tsx`
- `/app/laporan/penjualan/laba-kotor/page.tsx`
- `/app/laporan/penjualan/monitoring/page.tsx`
- `/app/laporan/penjualan/per-item/page.tsx`
- `/app/laporan/penjualan/per-kelompok/page.tsx`
- `/app/laporan/penjualan/per-pemasok/page.tsx`
- `/app/laporan/penjualan/piutang/page.tsx`
- `/app/laporan/penjualan/rekonsiliasi-rekap-kasir/page.tsx`
- `/app/laporan/penjualan/retur/page.tsx`
- `/app/laporan/penjualan/statistik/page.tsx`

### Laporan Pembelian  
- `/app/laporan/pembelian/page.tsx`
- `/app/laporan/pembelian/hutang/page.tsx`
- `/app/laporan/pembelian/retur/page.tsx`
- `/app/laporan/pembelian/statistik/page.tsx`

### Laporan Stok
- `/app/laporan/stok/page.tsx`
- `/app/laporan/stok/kartu-stok/page.tsx`
- `/app/laporan/stok/maximum/page.tsx`
- `/app/laporan/stok/minimum/page.tsx`
- `/app/laporan/stok/nilai-stok/page.tsx`
- `/app/laporan/stok/opname/page.tsx`
- `/app/laporan/stok/statistik/page.tsx`

### Laporan Akuntansi
- `/app/akuntansi/buku-kas-bank/page.tsx`
- `/app/akuntansi/laporan-arus-kas/page.tsx`
- `/app/akuntansi/laporan-buku-besar/page.tsx`
- `/app/akuntansi/laporan-laba-rugi/page.tsx`
- `/app/akuntansi/laporan-neraca/page.tsx`
- `/app/akuntansi/laporan-saldo-deposit/page.tsx`
- `/app/akuntansi/laporan/saldo-deposit/page.tsx`

### Data Lain-lain
- `/app/data-lain-lain/beban-luar-dagang/page.tsx`
- `/app/data-lain-lain/data-beban-barang-dagang/page.tsx`
- `/app/data-lain-lain/data-transaksi-bkp/page.tsx`
- `/app/data-lain-lain/detail-transaksi-pkp/page.tsx`

## Template Update

Untuk setiap file, lakukan perubahan berikut:

### 1. Import Hook
```diff
+ import { useReportPrint } from '@/hooks/use-report-print';
```

### 2. Initialize Hook
```diff
+ const reportPrint = useReportPrint({ 
+   reportTitle: 'NAMA_LAPORAN',
+   reportSubtitle: 'SUBTITLE_LAPORAN' 
+ });
```

### 3. Replace Print Function
```diff
- const handlePrint = () => window.print();
+ // Remove this line, use reportPrint.handlePrint instead
```

### 4. Replace Print Button
```diff
- <Button onClick={handlePrint}>
-   <Printer className="mr-2 h-4 w-4" />
-   Cetak Laporan
- </Button>
+ <reportPrint.PrintButtons />
```

## Keuntungan Setelah Update

1. **✅ Eliminasi "localhost"** - Tidak ada lagi localhost di print header
2. **✅ Dual printing options** - Thermal printer + browser fallback
3. **✅ Smart environment detection** - Auto prioritize thermal di production
4. **✅ Consistent UI** - Semua laporan punya tombol yang sama
5. **✅ Error handling** - Auto fallback jika thermal gagal
6. **✅ DOM extraction** - Otomatis extract data dari table existing

## Testing Checklist

Untuk setiap laporan yang sudah diupdate:
- ✅ Browser print masih berfungsi (fallback)
- ✅ Thermal print berfungsi dengan data yang benar
- ✅ Table data ter-extract dengan benar
- ✅ Format ESC/POS sesuai dengan lebar kertas
- ✅ Filter parameters ter-capture
- ✅ Summary/total ter-include di print output

## Priority Update Order

1. **HIGH**: Laporan yang sering digunakan
   - Laporan Penjualan (✅ DONE)
   - Laporan Tutup Kasir (✅ DONE)
   - Laporan Stok

2. **MEDIUM**: Laporan periodic
   - Laporan Pembelian
   - Laporan Akuntansi

3. **LOW**: Laporan jarang digunakan
   - Data lain-lain
   - Laporan statistik advanced

Dengan mass update ini, aplikasi akan sepenuhnya independen dari `window.print()` dan `localhost` untuk semua fungsi cetak!