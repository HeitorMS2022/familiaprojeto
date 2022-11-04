var imagens = 
["https://i.postimg.cc/MKdhy06Z/family.jpg",
"https://i.postimg.cc/L6HcYQM0/grand-father.png",
"https://i.postimg.cc/wjMnFtMX/father.jpg",
"https://i.postimg.cc/5ymDKL83/bro.jpg",
"https://i.postimg.cc/JnL6wtrd/sister.jpg",
"https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var nomes = ["Álbum da família","Rodrigo Silva","Diego Silva",
"Roberto Silva","Aline Silva","Sonia Silva"];
var i = 0;
function uptade()
{
    i = i + 1;
    var ndfna = 5;
    if(i > ndfna)
    {
        i=0;
    }
    var atualizarimg = imagens[i];
    var atualizarnome = nomes[i];
    document.getElementById("imagemfamilia").src = atualizarimg;
    document.getElementById("nomedafamilia").innerHTML = atualizarnome;
}