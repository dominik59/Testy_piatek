var young_nr_of_question=0;
var old_nr_of_question=0;

var young_question=[["1.Po wyłączeniu komputera wymazuje się zawartość:","pamięci RAM","pamięci ROM","pamięci zewnętrznej","dyskietki"],["2. Najmniejszą jednostką informacji jest:","1 bajt","1 znak","1 bit","1 plik"],["3. dysk twardy to rodzaj:","pamięci wewnętrznej","pamięci operacyjnej","ulotnej pamięci zewnętrznej","pamięci zewnętrznej"],["4. Folderem w systemie Windows nazywamy:", "obrazek zapisany na dysku twardym.", "	miejsce na dysku do zapisywania plików lub innych folderów.", "	część sytemu operacyjnego.", "urządzenie wejściowe komputera."]];

function clear_the_young_counter()
{
    young_nr_of_question=0;
}
function clear_the_old_counter()
{
    old_nr_of_question=0;
}
function load_next_young_question()
{
    document.getElementById('young_question_text').innerHTML=young_question[young_nr_of_question][0];
    document.getElementById('young_answear_1').innerHTML=young_question[young_nr_of_question][1];
    document.getElementById('young_answear_2').innerHTML=young_question[young_nr_of_question][2];
    document.getElementById('young_answear_3').innerHTML=young_question[young_nr_of_question][3];
    document.getElementById('young_answear_4').innerHTML=young_question[young_nr_of_question][4];
    young_nr_of_question++;
    if(young_nr_of_question==4)
    {
        young_nr_of_question=0;
    }
}
