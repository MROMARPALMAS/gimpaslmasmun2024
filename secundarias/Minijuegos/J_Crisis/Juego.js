alert("Think about a number between 0 and 63.")
alert("You will see a sort of diferent cards with numbers in it, please type Y(yes) or N(no) if you see the number you think in each card.")
let n = 0
let q1 = prompt("Card 1: 1-3-5-7-9-11-13-15-17-19-21-23-25-27-29-31-33-35-37-39-41-43-45-47-49-51-53-55-57-59-61-63")
let q2 = prompt("Card 2: 2-3-6-7-10-11-14-15-18-19-22-23-26-27-30-31-34-35-38-39-42-43-46-47-50-51-54-55-58-59-62-63")
let q3 = prompt("Card 3: 4-5-6-7-12-13-14-15-20-21-22-23-28-29-30-31-36-37-38-39-44-45-46-47-52-53-54-55-60-61-62-63")
let q4 = prompt("Card 4: 8-9-10-11-12-13-14-15-24-25-26-27-28-29-30-31-40-41-42-43-44-45-46-47-56-57-58-59-60-61-62-63")
let q5 = prompt("Card 5: 16-17-18-19-20-21-22-23-24-25-26-27-28-29-30-31-48-49-50-51-52-53-54-55-56-57-58-59-60-61-62-63")
let q6 = prompt("Card 6: 32-33-34-35-36-37-38-39-40-41-42-43-44-45-46-47-48-49-50-51-52-53-54-55-56-57-58-59-60-61-62-63")

function suma(n){
    
    if(q1 == "Y"){
        n += 1
}if(q2 == "Y"){
    n += 2
}if(q3 == "Y"){
    n += 4
}if(q4 == "Y"){
    n += 8
}if(q5 == "Y"){
    n += 16
}if(q6 == "Y"){
    n += 32
}
return n    
}
alert("You are thinking in: "+suma(n))