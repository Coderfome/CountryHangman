infoModal = document.getElementById('infoModal')
infoModalText = document.getElementById('infoModalText')

function generate(){

if(localStorage.getItem('visited') == null){
    setTimeout(() => {
        showModal('howToPlay')
    }, 500);
    
}   


countries = ['AFGHANISTAN', 'ALBANIA', 'ALGERIA', 'ANDORRA', 'ANGOLA', 'ANTIGUA AND BARBUDA', 'ARGENTINA', 'ARMENIA', 'AUSTRALIA', 'AUSTRIA', 'AZERBAIJAN', 'BAHAMAS', 'BAHRAIN', 'BANGLADESH', 'BARBADOS', 'BELARUS', 'BELGIUM', 'BELIZE', 'BENIN', 'BHUTAN', 'BOLIVIA', 'BOSNIA AND HERZEGOVINA', 'BOTSWANA', 'BRAZIL', 'BRUNEI', 'BULGARIA', 'BURKINA FASO', 'BURUNDI', 'CAPE VERDE', 'CAMBODIA', 'CAMEROON', 'CANADA', 'CENTRAL AFRICAN REPUBLIC', 'CHAD', 'CHILE', 'COLOMBIA', 'COMOROS', 'REPUBLIC OF THE CONGO', 'COSTA RICA', 'IVORY COAST', 'CROATIA', 'CUBA', 'CYPRUS', 'CZECHIA', 'NORTH KOREA', 'DEMOCRATIC REPUBLIC OF THE CONGO', 'DENMARK', 'DJIBOUTI', 'DOMINICA', 'DOMINICAN REPUBLIC', 'ECUADOR', 'EGYPT', 'EL SALVADOR', 'EQUATORIAL GUINEA', 'ERITREA', 'ESTONIA', 'ESWATINI', 'ETHIOPIA', 'FIJI', 'FINLAND', 'FRANCE', 'GABON', 'GAMBIA', 'GEORGIA', 'GERMANY', 'GHANA', 'GREECE', 'GRENADA', 'GUATEMALA', 'GUINEA', 'GUINEA BISSAU', 'GUYANA', 'HAITI', 'HONDURAS', 'HUNGARY', 'ICELAND', 'INDIA', 'INDONESIA', 'IRAN', 'IRAQ', 'IRELAND', 'ISRAEL', 'ITALY', 'JAMAICA', 'JAPAN', 'JORDAN', 'KAZAKHSTAN', 'KENYA', 'KIRIBATI', 'KUWAIT', 'KIRIBATI', 'KYRGYZSTAN', 'LAOS', 'LATVIA', 'LEBANON', 'LESOTHO', 'LIBERIA', 'LIBYA', 'LIECHTENSTEIN', 'LITHUANIA', 'LUXEMBOURG', 'MADAGASCAR', 'MALAWI', 'MALAYSIA', 'MALDIVES', 'MALI', 'MALTA', 'MARSHALL ISLANDS', 'MAURITANIA', 'MAURITIUS', 'MEXICO', 'MICRONESIA', 'MONACO', 'MONGOLIA', 'MONTENEGRO', 'MOROCCO', 'MOZAMBIQUE', 'MYANMAR', 'NAMIBIA', 'NAURU', 'NEPAL', 'NETHERLANDS', 'NEW ZEALAND', 'NICARAGUA', 'NIGER', 'NIGERIA', 'NORTH MACEDONIA', 'NORWAY', 'OMAN', 'PAKISTAN', 'PALAU', 'PALESTINE', 'PANAMA', 'PAPUA NEW GUINEA', 'PARAGUAY', 'PERU', 'PHILIPPINES', 'POLAND', 'PORTUGAL', 'QATAR', 'SOUTH KOREA', 'MOLDOVA', 'ROMANIA', 'RUSSIA', 'RWANDA', 'SAINT KITTS AND NEVIS', 'SAINT LUCIA', 'SAINT VINCENT AND THE GRENADINES', 'SAMOA', 'SAN MARINO', 'SAO TOME AND PRINCIPE', 'SAUDI ARABIA', 'SENEGAL', 'SERBIA', 'SEYCHELLES', 'SIERRA LEONE', 'SINGAPORE', 'SLOVAKIA', 'SLOVENIA', 'SOLOMON ISLANDS', 'SOMALIA', 'SOUTH AFRICA', 'SOUTH SUDAN', 'SPAIN', 'SRI LANKA', 'SUDAN', 'SURINAME', 'SWEDEN', 'SWITZERLAND', 'SYRIA', 'TAIWAN', 'TAJIKISTAN', 'THAILAND', 'EAST TIMOR', 'TOGO', 'TONGA', 'TRINIDAD AND TOBAGO', 'TUNISIA', 'TURKEY', 'TURKMENISTAN', 'TUVALU', 'UGANDA', 'UKRAINE', 'UNITED ARAB EMIRATES', 'UNITED KINGDOM', 'TANZANIA', 'UNITED STATES OF AMERICA', 'URUGUAY', 'UZBEKISTAN', 'VANUATU', 'VATICAN CITY', 'VENEZUELA', 'VIETNAM', 'YEMEN', 'ZAMBIA', 'ZIMBABWE']
num = Math.floor(Math.random()*countries.length+1)
ans = countries[num]
ansA = ans.split('')
blanks = ' _'.repeat(ans.length)
attemptA = blanks.split(' ')
delete attemptA[0]
mistakes = 0
lettersdone = []
document.getElementById('hangman').src = '0.png'
i = 0
while (i < ans.length){
            
    if (ansA[i] == ' '){
        attemptA[i+1] = '/' ; 
    }
i=i+1
}
document.getElementById('attempt').innerHTML = attemptA.join(' ')
}

function letterPush(letter){
    if (lettersdone.includes(letter)){
        showNotification('alreadyGuessedNotify') 
    }
    else{
    i = 0
        while (i < ans.length){
            
            if (ansA[i] == letter){
                attemptA[i+1] = letter ; 
            }
        i=i+1
    }
    if (ansA.includes(letter)){
    document.getElementById('attempt').innerHTML = attemptA.join(' ')
    
    }
    else{
        mistakes = mistakes + 1
        document.getElementById('hangman').src = mistakes+'.png'
    }
    }
    lettersdone.push(letter)
    if (mistakes == 7){
            showModal('infoModal')
            infoModalText.innerHTML = 'Game Over. The correct answer was <b>' + ans + '</b>. Click OK for a new challenge.'
            generate()
        
    }
    if (!attemptA.includes('_')){
        setTimeout(() => {
            showModal('infoModal')
            infoModalText.innerText = 'You win. Click OK for a new challenge.'
            generate()
        }, 1000);
        
    }

    if (!localStorage.getItem('visited') == true){
        localStorage.setItem('visited', 'true')
    }
}

document.addEventListener('keydown', e=>{
    hideAllModals()    
    if(e.key == 'a' || e.key == 'A'){
        letterPush('A')
    }
    if(e.key == 'b' || e.key == 'B'){
        letterPush('B')
    }
    if(e.key == 'c' || e.key == 'C'){
        letterPush('C')
    }
    if(e.key == 'd' || e.key == 'D'){
        letterPush('D')
    }
    if(e.key == 'e' || e.key == 'E'){
        letterPush('E')
    }
    if(e.key == 'f' || e.key == 'F'){
        letterPush('F')
    }
    if(e.key == 'g' || e.key == 'G'){
        letterPush('G')
    }
    if(e.key == 'h' || e.key == 'H'){
        letterPush('H')
    }
    if(e.key == 'i' || e.key == 'I'){
        letterPush('I')
    }
    if(e.key == 'j' || e.key == 'J'){
        letterPush('J')
    }
    if(e.key == 'k' || e.key == 'K'){
        letterPush('K')
    }
    if(e.key == 'l' || e.key == 'L'){
        letterPush('L')
    }
    if(e.key == 'm' || e.key == 'M'){
        letterPush('M')
    }
    if(e.key == 'n' || e.key == 'N'){
        letterPush('N')
    }
    if(e.key == 'o' || e.key == 'O'){
        letterPush('O')
    }
    if(e.key == 'p' || e.key == 'P'){
        letterPush('P')
    }
    if(e.key == 'q' || e.key == 'Q'){
        letterPush('Q')
    }
    if(e.key == 'r' || e.key == 'R'){
        letterPush('R')
    }
    if(e.key == 's' || e.key == 'S'){
        letterPush('S')
    }
    if(e.key == 't' || e.key == 'T'){
        letterPush('T')
    }
    if(e.key == 'u' || e.key == 'U'){
        letterPush('U')
    }
    if(e.key == 'v' || e.key == 'V'){
        letterPush('V')
    }
    if(e.key == 'w' || e.key == 'W'){
        letterPush('W')
    }
    if(e.key == 'x' || e.key == 'X'){
        letterPush('X')
    }
    if(e.key == 'y' || e.key == 'Y'){
        letterPush('Y')
    }
    if(e.key == 'z' || e.key == 'Z'){
        letterPush('Z')
    }
})