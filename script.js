document.getElementById('transaksiForm').addEventListener('submit', function(event) {
    const namaTransaksi = document.getElementById('namaTransaksi').value;
    const jumlah = document.getElementById('jumlah').value;
    const kategori = document.getElementById('kategori').value;

    if (!namaTransaksi || !jumlah || !kategori) {
        alert('Semua input harus diisi!');
        event.preventDefault(); // Mencegah form dari pengiriman
    }
});
