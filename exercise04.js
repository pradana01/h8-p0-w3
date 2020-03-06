var arr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arr){
    var nama = arr.slice(1,2);
    arr.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    arr.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    var bulan = arr[3].split('/');
    var bulanJoin = bulan.join('-');
    var bulanSort = bulan.sort(function (a, b){
        return b - a;
    });
    var gantiBulan = bulanSort[2];

    switch (gantiBulan){
        case '01' : gantiBulan = 'Januari'; break;
        case '02' : gantiBulan = 'Februari'; break;
        case '03' : gantiBulan = 'Maret'; break;
        case '04' : gantiBulan = 'April'; break;
        case '05' : gantiBulan = 'Mei'; break;
        case '06' : gantiBulan = 'Juni'; break;
        case '07' : gantiBulan = 'Juli'; break;
        case '08' : gantiBulan = 'Agustus'; break;
        case '09' : gantiBulan = 'September'; break;
        case '10' : gantiBulan = 'Oktober'; break;
        case '11' : gantiBulan = 'November'; break;
        case '12' : gantiBulan = 'Desember'; break;
        default: gantiBulan = ''; break;
    }

    console.log(arr);
    console.log(gantiBulan);
    console.log(bulanSort);
    console.log(bulanJoin);
    console.log(nama);
    return '';

    
}

console.log(dataHandling2(arr));