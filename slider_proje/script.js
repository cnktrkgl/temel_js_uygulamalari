var charecters = [
    {
        name: 'Tommy Vercetti',
        image: 'images/Tommy__Vercetti-8328-360.jpg',
        link: 'https://gta.fandom.com/wiki/Characters_in_GTA_Vice_City'
    },
    {
        name: 'Sonny Forelli',
        image: 'images/Sonny__Forelli-8307-360.jpg',
        link: 'https://gta.fandom.com/wiki/Characters_in_GTA_Vice_City'
    },
    {
        name: 'Ken_Rosenberg',
        image: 'images/Ken_Rosenberg-8324-1600.jpg',
        link: 'https://gta.fandom.com/wiki/Characters_in_GTA_Vice_City'
    },
    {
        name: 'Lance Vance',
        image: 'images/Lance_Vance-8325-1600.jpg',
        link: 'https://gta.fandom.com/wiki/Characters_in_GTA_Vice_City'
    },
    {
        name: 'Kent Paul',
        image: 'images/Kent_Paul-8321-1600.jpg',
        link: 'https://gta.fandom.com/wiki/Characters_in_GTA_Vice_City'
    },
    {
        name: 'Phil Cassidy',
        image: 'images/Cassidy-8314-360.jpg',
        link: 'https://gta.fandom.com/wiki/Characters_in_GTA_Vice_City'
    },
    {
        name: 'Colonel Cortez',
        image: 'images/Cortez-8313-360.jpg',
        link: 'https://gta.fandom.com/wiki/Characters_in_GTA_Vice_City'
    },
    {
        name: 'Avery Clinton',
        image: 'images/Avery__Neon-8305-360.jpg',
        link: 'https://gta.fandom.com/wiki/Characters_in_GTA_Vice_City'
    },
    {
        name: 'Diaz Mendez',
        image: 'images/igallery_8301-8400_GTA__ViceCity__Artwork__Diaz-8323-360.jpg',
        link: 'https://gta.fandom.com/wiki/Characters_in_GTA_Vice_City'
    },
    {
        name: 'Candy',
        image: 'images/Candy__Suxx-8319-360.jpg',
        link: 'https://gta.fandom.com/wiki/Characters_in_GTA_Vice_City'
    },
    {
        name: 'Mercedes Cortez',
        image: 'images/Mercedes-8322-360.jpg',
        link: 'https://gta.fandom.com/wiki/Characters_in_GTA_Vice_City'
    },
    {
        name: 'Umberto Troje',
        image: 'images/Umberto-8320-360.jpg',
        link: 'https://gta.fandom.com/wiki/Characters_in_GTA_Vice_City'
    }
];

var index = 0;
var slaytCount = charecters.length;
var interval;
var settings = {
    duration: 2000,
    random: true
};

init(settings);

document.querySelector('.btnl').addEventListener('click', function () {
    index--;
    showSlide(index);
});

document.querySelector('.btnr').addEventListener('click', function () {
    index++;
    showSlide(index);
});

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval);
    })
});

document.querySelector('.arrow').forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        init(settings);
    })
})

function init(settings) {
    var prev;
    interval = setInterval(function () {
        if (settings.random) {
            do { // random index
                index = Math.floor(Math.random() * slaytCount);
            } while (index == prev);
            prev = index;
        }
        else { // artan index
            if (slaytCount = index + 1) {
                index = 0
            };
            showSlide(index);
            index++;
        }
        showSlide(index);
    }, settings.duration)
}

function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slaytCount - 1;
    };

    if (i > 11) {
        index = 0;
    };

    document.querySelector('.card-img-top').setAttribute('src', charecters[index].image);
    document.querySelector('.card-title').textContent = charecters[index].name;
    document.querySelector('.card-link').setAttribute('href', charecters[index].link);
}