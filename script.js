// импортируем функцию
import { getMap } from './map.js'

// находим кнопку и добавляем к ней обработчик
document.getElementById('my_position').onclick = () => {
    navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
    })
}

function success({ coords }) {
    const { latitude, longitude } = coords
    const currentPosition = [latitude, longitude]
    getMap(currentPosition, 'You are here')
}

function error(error) {
    if (error.code == 1) {
        window.location.href = "errors/err_1.html";
    } else {
        window.location.href = "errors/err_other.html";
    }
}