let input;

document.getElementById("submit").onclick = function(){
  input = document.getElementById("input").value;
  switch (input) {
    case "Lunes":
      alert("Los Lunes debo atender un cliente especifico.")
      break;
    case "Martes":
      alert("Los Martes visito una agencia fuera de la ciudad.")
      break;
    case "Miércoles":
      alert("Los Miércoles debo llevar a mi hija al ballet (balé).")
      break;
    case "Jueves":
      alert("El Jueves debo priorizar entregas de desarrollo.")
      break;
    case "Viernes":
      alert("El Viernes debo atender problemas de manera remota.")
      break;
    case "Sabado":
      alert("El Sábado debo hacer lo que mi esposa quiera.")
      break;
    case "Domingo":
      alert("No se agendo una actividad")
      break;
    default:
      alert("Entrada invalida. Asegurese que escribio bien el dia de la semana. " +
        "Valores validos: Lunes, Martes, Miércoles, Jueves, Viernes, Sabado, Domingo " )
      break;
  }
}