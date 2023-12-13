const fakeData = [
    {
        id: 1,
        price: 500,
        area: "Area 1",
        composition: "s+1",
        location: "https://www.google.com/maps/place/Tunis+Centre,+Tunis/@36.7950526,10.1843919,15z/data=!3m1!4b1!4m6!3m5!1s0x12fd3413283750ef:0x62439fe027d59021!8m2!3d36.7982597!4d10.1843333!16s%2Fg%2F1tfq17tl?entry=ttu",
        image: "https://example.com/image1.jpg",
        video: "https://example.com/video1.mp4"
    },
    {
        id: 2,
        price: 3000,
        area: "Area 2",
        composition: "s+2",
        location: "https://www.google.com/maps/place/Sousse+Bab+Jdid/@35.823063,10.6415928,17z/data=!3m1!4b1!4m6!3m5!1s0x13027572a8680419:0x74fd577c0eb8ecd7!8m2!3d35.823063!4d10.6415928!16s%2Fg%2F1ttrty5h?entry=ttu",
        image: "https://example.com/image2.jpg",
        video: "https://example.com/video2.mp4"
    },
    {
        id: 3,
        price: 1000,
        area: "Area 1",
        composition: "s+1",
        location: "https://www.google.com/maps/place/Hammamet/@36.4057855,10.6207752,14z/data=!3m1!4b1!4m6!3m5!1s0x12fd61fc0dac1583:0x8f1c841291df5ff!8m2!3d36.4072574!4d10.6224706!16zL20vMDYyX3p5?entry=ttu",
        image: "https://example.com/image3.jpg",
        video: "https://example.com/video3.mp4"
    },
    {
        id: 4,
        price: 2514,
        area: "Area 2",
        composition: "s+1",
        location: "https://www.google.com/maps/search/Hotels/@35.7542719,10.8104396,13z?entry=ttu",
        image: "https://example.com/image4.jpg",
        video: "https://example.com/video4.mp4"
    },
    {
        id: 5,
        price: 1400,
        area: "Area 1",
        composition: "s0",
        location: "https://www.google.com/maps/place/Djerba/@33.7733729,10.8937484,11z/data=!3m1!4b1!4m6!3m5!1s0x13aabc09046e9991:0x6830d5301a39ca66!8m2!3d33.8075978!4d10.8451467!16zL20vMDI3a3R0?entry=ttuhttps://www.google.com/maps/place/Djerba/@33.7733729,10.8937484,11z/data=!3m1!4b1!4m6!3m5!1s0x13aabc09046e9991:0x6830d5301a39ca66!8m2!3d33.8075978!4d10.8451467!16zL20vMDI3a3R0?entry=ttu",
        image: "https://example.com/image5.jpg",
        video: "https://example.com/video5.mp4"
    },
    {
        id: 6,
        price: 1800,
        area: "Area 3",
        composition: "s+2",
        location: "https://www.google.com/maps/place/Bizerte+Nord/@37.4116677,9.3776789,10z/data=!3m1!4b1!4m6!3m5!1s0x12e31eb6aa9f7291:0x1a70248bc186e30f!8m2!3d37.3043664!4d9.8236533!16s%2Fg%2F120m10fj?entry=ttu",
        image: "https://example.com/image6.jpg",
        video: "https://example.com/video6.mp4"
    },
    {
        id: 7,
        price: 1200,
        area: "Area 4",
        composition: "s0",
        location: "https://www.google.com/maps/place/Gahbaya+gabes/@36.9020428,10.1878918,17z/data=!3m1!4b1!4m6!3m5!1s0x12e2cb32ea89598d:0x6073485272000d78!8m2!3d36.9020428!4d10.1878918!16s%2Fg%2F11vlryz8yj?entry=ttu",
        image: "https://example.com/image7.jpg",
        video: "https://example.com/video7.mp4"
    },
    {
        id: 8,
        price: 2200,
        area: "Area 2",
        composition: "s+1",
        location: "https://www.google.com/maps/place/Kairouan/@35.6733979,10.1044472,13z/data=!3m1!4b1!4m6!3m5!1s0x12fdc54531303f79:0xbba4cacca78e555e!8m2!3d35.6711663!4d10.1005469!16zL20vMDI3eTQw?entry=ttu",
        image: "https://example.com/image8.jpg",
        video: "https://example.com/video8.mp4"
    },
    {
        id: 9,
        price: 1600,
        area: "Area 1",
        composition: "s+2",
        location: "https://www.google.com/maps/place/Tozeur/@33.9186805,8.1198406,13z/data=!3m1!4b1!4m6!3m5!1s0x1257c028313d134d:0xc48c27f26a58203!8m2!3d33.918534!4d8.1229329!16zL20vMDM2d3My?entry=ttu",
        image: "https://example.com/image9.jpg",
        video: "https://example.com/video9.mp4"
    },
    {
        id: 10,
        price: 2000,
        area: "Area 3",
        composition: "s+1",
        location: "https://www.google.com/maps/place/Nabeul%E2%80%8E/@36.4523952,10.7153417,13z/data=!3m1!4b1!4m6!3m5!1s0x13029895efbdd3d3:0x2e5d60d1569ce4fe!8m2!3d36.4512893!4d10.7356634!16zL20vMGIxcWpo?entry=ttu",
        image: "https://example.com/image10.jpg",
        video: "https://example.com/video10.mp4"
    },
    {
        id: 11,
        price: 3500,
        area: "Area 4",
        composition: "s+2",
        location: "https://www.google.com/maps/place/Kass%C3%A9rine+Governorate/@35.209159,8.7925549,9z/data=!3m1!4b1!4m6!3m5!1s0x12f914fd774fd33b:0x695174c106f3653f!8m2!3d35.0809148!4d8.6600586!16zL20vMDkxeXln?entry=ttu",
        image: "https://example.com/image11.jpg",
        video: "https://example.com/video11.mp4"
    },
    {
        id: 12,
        price: 900,
        area: "Area 1",
        composition: "s0",
        location: "https://www.google.com/maps/place/Jendouba/@36.503287,8.7788915,14z/data=!3m1!4b1!4m6!3m5!1s0x12fb124ea3099bff:0x6bef4f37f93342da!8m2!3d36.5072263!4d8.7756556!16zL20vMDhfcTY4?entry=ttu",
        image: "https://example.com/image12.jpg",
        video: "https://example.com/video12.mp4"
    },
    {
        id: 13,
        price: 2800,
        area: "Area 2",
        composition: "s+1",
        location: "https://www.google.com/maps/place/Sfax/@34.7613945,10.7330985,12z/data=!3m1!4b1!4m6!3m5!1s0x13002cda1486c695:0x22dfe0a62c50ce6f!8m2!3d34.739822!4d10.7600196!16zL20vMDZ0MWt4?entry=ttu",
        image: "https://example.com/image13.jpg",
        video: "https://example.com/video13.mp4"
    },
    {
        id: 14,
        price: 1700,
        area: "Area 3",
        composition: "s+2",
        location: "https://www.google.com/maps/place/Mahdia/@35.5047323,11.052057,14z/data=!3m1!4b1!4m6!3m5!1s0x130223f5186c6cf9:0x675f7b734dffa5bb!8m2!3d35.5024461!4d11.045721!16zL20vMDQ0cnBo?entry=ttu",
        image: "https://example.com/image14.jpg",
        video: "https://example.com/video14.mp4"
    },
    {
        id: 15,
        price: 1300,
        area: "Area 4",
        composition: "s0",
        location: "https://www.google.com/maps/place/Gafsa/@34.4285913,8.7736605,14z/data=!3m1!4b1!4m6!3m5!1s0x12f896fa5476901f:0x873608732b8975d5!8m2!3d34.4311398!4d8.7756556!16zL20vMDZoMW04?entry=ttu",
        image: "https://example.com/image15.jpg",
        video: "https://example.com/video15.mp4"
    },
    {
        id: 16,
        price: 2400,
        area: "Area 1",
        composition: "s+1",
        location: "https://www.google.com/maps/place/Tataouine/@32.9245831,10.442505,13z/data=!3m1!4b1!4m6!3m5!1s0x1254b7596be92873:0xd94cf811d4ad762d!8m2!3d32.9210902!4d10.4508956!16zL20vMDVnMGxu?entry=ttu",
        image: "https://example.com/image16.jpg",
        video: "https://example.com/video16.mp4"
    },
    {
        id: 17,
        price: 1900,
        area: "Area 2",
        composition: "s+2",
        location: "https://www.google.com/maps/place/Beja/@36.7297099,9.1876022,14z/data=!3m1!4b1!4m6!3m5!1s0x12fb588073d15b35:0x67e6f1f9d0f178b2!8m2!3d36.7333193!4d9.1843676!16zL20vMDR6dDY3?entry=ttu",
        image: "https://example.com/image17.jpg",
        video: "https://example.com/video17.mp4"
    },
    {
        id: 18,
        price: 1100,
        area: "Area 3",
        composition: "s0",
        location: "https://www.google.com/maps/place/Siliana/@36.0868053,9.3652439,15z/data=!3m1!4b1!4m6!3m5!1s0x12fc654a8737e17f:0xdd533dfbcc5e23ef!8m2!3d36.0887208!4d9.3645335!16zL20vMGI0MXd4?entry=ttu",
        image: "https://example.com/image18.jpg",
        video: "https://example.com/video18.mp4"
    },
    {
        id: 19,
        price: 3000,
        area: "Area 4",
        composition: "s+1",
        location: "https://www.google.com/maps/place/Qibil%C4%AB/@33.7036687,8.9735126,14z/data=!3m1!4b1!4m6!3m5!1s0x12566e541bcc6359:0x79fc96a6bcfd0b81!8m2!3d33.7071551!4d8.9714623!16zL20vMGI0MXNi?entry=ttu",
        image: "https://example.com/image19.jpg",
        video: "https://example.com/video19.mp4"
    },
    {
        id: 20,
        price: 1600,
        area: "Area 1",
        composition: "s+2",
        location: "https://www.google.com/maps/place/Medinine/@33.346623,10.4912567,14z/data=!3m1!4b1!4m6!3m5!1s0x1254d62866735147:0xf085df215e783c40!8m2!3d33.3399221!4d10.4958678!16zL20vMDZfN3l5?entry=ttu",
        image: "https://example.com/image20.jpg",
        video: "https://example.com/video20.mp4"
    },
];

export default fakeData;
