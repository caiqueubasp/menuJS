

let ulNav = $('.ulNav');
let hamburguer = $('.hamburguer');
let brand = $('.brand');
let itensLi1 = $('.itensLi1');
let itensLi2 = $('.itensLi2');
let itensLi3 = $('.itensLi3');
let divBrand = $('.divBrand');
let divLorem1 = $('.divLorem1');
let divLorem2 = $('.divLorem2');
let divLorem3 = $('.divLorem3');

$('.divBrand').hide();
$('.divLorem1').hide();
$('.divLorem2').hide();
$('.divLorem3').hide();

$('.brand').click(function(){
    $('.divBrand').toggle(2000);
    $('.divLorem1').hide();
    $('.divLorem2').hide();
    $('.divLorem3').hide();
});


$('.hamburguer').click(function(){
    $('.itensLi1').toggle();
    $('.itensLi2').toggle();
    $('.itensLi3').toggle();
    
});

$('.itensLi1').click(function(){
    $('.divLorem1').toggle();
    $('.divLorem2').hide();
    $('.divLorem3').hide();
    $('.divBrand').hide();
});

$('.itensLi2').click(function(){
    $('.divLorem2').toggle();
    $('.divLorem1').hide();
    $('.divLorem3').hide();
    $('.divBrand').hide();
});

$('.itensLi3').click(function(){
    $('.divLorem3').toggle();
    $('.divLorem1').hide();
    $('.divLorem2').hide();
    $('.divBrand').hide();
})








