console.log('Cashout Script Loaded');
// machine id->input value
function getValeFromInput(id) {
    const input= document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}