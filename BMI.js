function kiem_tra(){
    let can_nang = document.getElementById("can_nang").value;
    let chieu_cao = document.getElementById("chieu_cao").value;
    let bmi = can_nang / (Math.pow(chieu_cao)^2)
    let reusult = "";
if (bmi < 18)
    document.write("Under weight");
else if (bmi < 25.0)
    document.write("Normal");
else if (bmi < 30.0)
    document.write("Over weight");
else
    document.write("Obese");
    document.getElementById("reusult").innerHTML = "Chỉ số BMI là :" + bmi + "<b>" + reusult + "<b>";
}
