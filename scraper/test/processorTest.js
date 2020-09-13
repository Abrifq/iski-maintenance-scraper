const testData = `<tr>
    <th colspan="3" style="font-weight: bold; font-size: 12pt; color: #2e9def;
        border-bottom: orange 2px solid; font-family: 'Trebuchet MS'">
        Arıza Kesinti                                  
    </th>
</tr>
                 

<tr>
    <td valign="top">
        İlçe
    </td>
    <td valign="top" width="20">
        :
    </td>
    <td valign="top">
        Bağcılar
    </td>
</tr>
<tr>
    <td valign="top">
        Etkilenen Mahalleler
    </td>
    <td valign="top" width="20">
        :
    </td>
    <td valign="top">
        G&#246;ztepe Mah,G&#252;neşli Mah,Mahmutbey Mah,100Yıl Mah,Demırkapı Mah,Fatih Mah
    </td>
</tr>
<tr>
    <td valign="top">
        Arıza Sebebi
    </td>
    <td valign="top" width="20">
        :
    </td>
    <td valign="top">
        Ana İsale Hattı Deplase &#199;alışması
    </td>
</tr>
<tr>
    <td valign="top">
        Açıklama
    </td>
    <td valign="top" width="20">
        :
    </td>
    <td valign="top">
        K&#252;&#231;&#252;kk&#246;y-Cevatpaşa  Mahmutbey 1400 Mm .İsale Hattında Deplase  &#199;alışması Yapılmaktadır.
    </td>
</tr>
<tr>
    <td valign="top">
        Başlama Tarihi
    </td>
    <td valign="top" width="20">
        :
    </td>
    <td valign="top">


            08.09.2020 10:16
        </td>

    </tr>

    <tr>

        <td valign="top">
            Bitiş Tarihi
        </td>

        <td valign="top" width="20">
        :
    </td>
    <td valign="top">
        &#199;alışmanın tahmini olarak 9.9.2020 tarihinde saat 6:00 civarı bitirilmesi &#246;ng&#246;r&#252;lmektedir.
    </td>
</tr>
<tr>
    <td colspan="3">
        Kesinti bölgelerini haritada görmek için tıklayın:
        
[<strong><a href="http://harita.iski.gov.tr/?ilceKesinti=IL" target="_blank"">Link</a></strong>]
    </td>
</tr>
`;
async function tester() {
    //const expectedOutput = {};
    const outcome = await require("../processor")([testData]);
    console.log(outcome);
    /*for (const property in expectedOutput) {
        const isPropertyFilledIn = property in outcome;
        console.assert(isPropertyFilledIn, `property ${property} is expected but not found in the result.`);
        if (!isPropertyFilledIn) throw "less properties found than expected";
    }*/
}
tester();