var numMast1;
var numMast2;
var numMast3;
var numMast4;
var numMast5;
var aciertos;
var p;

aciertos = 0;
p = 0;

function loadEvents()
{
	document.getElementById("buttcomp").addEventListener('click', ComprNum1);
	document.getElementById("buttcomp").addEventListener('click', ComprNum2);
	document.getElementById("buttcomp").addEventListener('click', ComprNum3);
	document.getElementById("buttcomp").addEventListener('click', ComprNum4);
	document.getElementById("buttcomp").addEventListener('click', ComprNum5);
	document.getElementById("buttrein").addEventListener('click', reset);
	document.getElementById("buttrend").addEventListener('click', showAll);

	numAlea();
}

function numAlea()
{
	numMast1 = Math.floor(Math.random() * 3) + 1;
	numMast2 = Math.floor(Math.random() * 3) + 1;
	numMast3 = Math.floor(Math.random() * 3) + 1;
	numMast4 = Math.floor(Math.random() * 3) + 1;
	numMast5 = Math.floor(Math.random() * 3) + 1;

	musc();
}

function musc()
{
	document.getElementById("music").volume = 0.2;
}

function ComprNum1()
{
	var valor = document.getElementById("num1").value;
	if (valor.length > 0)
	{		
		x = Number(valor);
		if (x == 1 || x == 2 || x == 3) 
		{
			if (x == numMast1)
			{
				document.getElementById("mast1").innerHTML = numMast1;
				document.getElementById("num1").disabled = true;
			}
		}
		else
		{
			errorEnt();
		}
	}
	else
	{
		errorIntro();
	}
}

function ComprNum2()
{
	var valor = document.getElementById("num2").value;
	if (valor.length > 0)
	{		
		y = Number(valor);
		if (y == 1 || y == 2 || y == 3) 
		{
			if (y == numMast2)
			{
				document.getElementById("mast2").innerHTML = numMast2;
				document.getElementById("num2").disabled = true;
			}
		}
		else
		{
			errorEnt();
		}
	}
	else
	{
		errorIntro();
	}
}

function ComprNum3()
{
	var valor = document.getElementById("num3").value;
	if (valor.length > 0)
	{		
		z = Number(valor);
		if (z == 1 || z == 2 || z == 3) 
		{
			if (z == numMast3)
			{
				document.getElementById("mast3").innerHTML = numMast3;
				document.getElementById("num3").disabled = true;
			}
		}
		else
		{
			errorEnt();
		}
	}
	else
	{
		errorIntro();
	}
}

function ComprNum4()
{
	var valor = document.getElementById("num4").value;
	if (valor.length > 0)
	{		
		j = Number(valor);
		if (j == 1 || j == 2 || j == 3) 
		{
			if (j == numMast4)
			{
				document.getElementById("mast4").innerHTML = numMast4;
				document.getElementById("num4").disabled = true;
			}
		}
		else
		{
			errorEnt();
		}
	}
	else
	{
		errorIntro();
	}
}

function ComprNum5()
{
	var valor = document.getElementById("num5").value;
	if (valor.length > 0)
	{		
		i = Number(valor);
		if (i == 1 || i == 2 || i == 3) 
		{
			if (i == numMast5)
			{
				document.getElementById("mast5").innerHTML = numMast5;
				document.getElementById("num5").disabled = true;
			}
		}
		else
		{
			errorEnt();
		}
	}
	else
	{
		errorIntro();
	}

	winAlert();
}

function errorIntro()
{
	alert("Error! Comprueba haber introducido todos los campos antes de comprobar!")
}

function errorEnt()
{
	alert("Has introducido un número que no se encuentra entre el 1 y el 3 o una letra!")
}

function winAlert()
{
	if (x == numMast1 && y == numMast2 && z == numMast3 && j == numMast4 && i == numMast5)
	{
		setTimeout(() => { alert('Enhorabuena') }, 10)

		document.getElementById("buttcomp").disabled = true;

		p++;
		document.getElementById("intent").innerHTML = "Intentos: " + p;

		aciertos++
		document.getElementById("aciertos").innerHTML = "Aciertos: " + aciertos;

		showAll();
	}
	else 
	{
		p++;
		document.getElementById("intent").innerHTML = "Intentos: " + p;
	}
}

function reset()
{
	numAlea();
	document.getElementById("num1").value = '';
	document.getElementById("num2").value = '';
	document.getElementById("num3").value = '';
	document.getElementById("num4").value = '';
	document.getElementById("num5").value = '';

	document.getElementById("mast1").innerHTML = '*';
	document.getElementById("mast2").innerHTML = '*';
	document.getElementById("mast3").innerHTML = '*';
	document.getElementById("mast4").innerHTML = '*';
	document.getElementById("mast5").innerHTML = '*';

	document.getElementById("num1").disabled = false;
	document.getElementById("num2").disabled = false;
	document.getElementById("num3").disabled = false;
	document.getElementById("num4").disabled = false;
	document.getElementById("num5").disabled = false;

	document.getElementById("buttcomp").disabled = false;

	p = 0;
	document.getElementById("intent").innerHTML = "Intentos: " + p;
}

function showAll()
{
	document.getElementById("mast1").innerHTML = numMast1;
	document.getElementById("mast2").innerHTML = numMast2;
	document.getElementById("mast3").innerHTML = numMast3;
	document.getElementById("mast4").innerHTML = numMast4;
	document.getElementById("mast5").innerHTML = numMast5;

	document.getElementById("num1").disabled = true;
	document.getElementById("num2").disabled = true;
	document.getElementById("num3").disabled = true;
	document.getElementById("num4").disabled = true;
	document.getElementById("num5").disabled = true;

	document.getElementById("buttcomp").disabled = true;
}