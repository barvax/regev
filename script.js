let currentPage = 0;
const images = ["1.webp", "2.webp", "3.webp", "4.webp","5.webp"];
const texts = ["רֶגֶב הוּא יֶלֶד מְאֻשָּׁר, תָּמִיד נִכְנַס לְכָל מָקוֹם בִּסְעָרָה.", "הַרְבֵּה רַעַשׁ הוּא עוֹשֶׂה, וּלְחַטֵּט תָּמִיד רוֹצֶה!", "לִפְעָמִים רֶגֶב קְצָת מִגַּזִּים וְאָז כֻּלָּם אוֹתוֹ עוֹזְבִים...", "' חַגִּית עִזְבִי, הוּא לֹא יָבוֹא ' אָמְרָה חֵן, כָּל הַזְּמַן כָּבֵד עָלָיו.. הוּא מַמָּשׁ זָקֵן!","וְכָכָה כְּמוֹ תָּמִיד, זֶה מָה שֶׁצָּרִיךְ לִקְרוֹת. רֶגֶב נִשְׁאַר לְבַד - כִּי צָרִיךְ מֻקְדָּם, לְהוֹצִיא אֶת הַבָּנוֹת."];

const title = document.getElementById('title')
function updatePage() {
    document.getElementById("story-image").src = images[currentPage];
    document.getElementById("story-text").innerText = texts[currentPage];
    document.getElementById("prevBtn").disabled = currentPage === 0;
    document.getElementById("nextBtn").disabled = currentPage === images.length - 1;
    if(currentPage!==0){
        title.textContent=''
    }else{
        title.textContent='קַבְּלוּ אוֹתִי!'
    }
}

document.getElementById("prevBtn").addEventListener("click", function() {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
});

document.getElementById("nextBtn").addEventListener("click", function() {
    if (currentPage < images.length - 1) {
        currentPage++;
        updatePage();
    }
});

window.onload = updatePage;
