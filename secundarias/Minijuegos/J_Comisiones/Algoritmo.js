function guessNumber() { alert("Piensa en un número entre 0 y 63."); 

let A = (prompt("carta 1: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63.\n¿Está tu número aquí? (Y/N)") === "Y") ? 1 : 0; 

let B = (prompt("carta 2: 2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59, 62, 63.\n¿Está tu número aquí? (Y/N)") === "Y") ? 2 : 0; 

let C = (prompt("carta 3: 4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55, 60, 61, 62, 63.\n¿Está tu número aquí? (Y/N)") === "Y") ? 4 : 0; 

let D = (prompt("carta 4: 8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63.\n¿Está tu número aquí? (Y/N)") === "Y") ? 8 : 0; 

let E = (prompt("carta 5: 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63.\n¿Está tu número aquí? (Y/N)") === "Y") ? 16 : 0; 

let F = (prompt("carta 6: 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63.\n¿Está tu número aquí? (Y/N)") === "Y") ? 32 : 0; 

let guessedNumber = A + B + C + D + E + F; alert("El número que estás pensando es: " + guessedNumber); } 
</script> 

</head> 
<body> 
    
    
    <button onclick="guessNumber()">Comenzar</button> 

</body> 

</html>