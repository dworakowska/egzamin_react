# Lab 08

## Zadanie 1
W komponencie HomePage zmien kolor tekstu Hello World wykorzystujac wybrane metody: Inline CSS, ClassName, CSS Modules, Styled Component. Zaobserwuj roznice miedzy nimi

## Projekt
Klient dostarczył pocięty szablon strony w folderze `templates` oraz baze danych produktów w pliku `products.json`. Pierwsza wersja sklepu będzie zawierała jedynie catalog produktów bez możliwości kupna. Twoim zadaniem jest dostarczenie gotowej strony z wykorzystaniem biblioteki React.

Do stworzenia projektu wykorzystaj `create-react-app`.
Stron powinna być podzielona na komponenty.

Staraj się w swoich komponent wykorzystać `PropTypes`
https://reactjs.org/docs/typechecking-with-proptypes.html

W miarę możliwości sklep powinien wyglądać identycznie jak na dołączonym szablonie. Klient nie określił preferowanego sposobu stylowania komponentów.

Sklep powinien składać się z 3 podstron. Każda z podstron posiada identyczną nawigacje i stopkę. Wykorzystaj `react-router-dom`

Strona główna: / (przycisk Home w menu)
Dwie sekcji wyświetlające 4 polecane produkty z danej kategorii. Kolejność wyświetlania produktów nie ma znaczenia.
Do rozpoznania polecanych produktów wykorzystaj informacje z pola `featured`

Katalog: /catalog
Lewa kolumna umożliwiająca filtrowanie produktów po nazwie i producencie. Przycisk `Clear` czyści zastosowane filtry i wyświetla wszystkie produkty.

Prawa kolumna wyświetla listę produktów w zależności od ustawień lewej kolumny.

Do pobierania danych możesz wykorzystać `MoviesService` z poprzednich ćwiczeń.

O nas: /about
Statyczna podstrona zawierająca tekst. Wykorzystaj tekst z szablonu.

Klient szanuje Twoj czas i swoje pieniądze więc wystarczy, że strona będzie działać na najnowszym Chrome/Firefox.

Powodzenia!