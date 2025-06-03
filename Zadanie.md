# Zadanie Rekrutacyjne - Rozbudowa Bloku Obrazu

## Cel Zadania

Rozbudowa istniejącego bloku obrazu (`responsiveImage.js`) o możliwość dostosowania wymiarów obrazu dla różnych urządzeń (desktop, tablet, mobile).

## Szczegółowy Opis

### 1. Rozbudowa Atrybutów

Należy rozszerzyć istniejące atrybuty bloku o następujące właściwości:

```javascript
attributes: {
    // Istniejące atrybuty...

    // Desktop
    widthDesktop: {
        type: "object",
        default: {
            value: 100,
            unit: "%"
        }
    },
    heightDesktop: {
        type: "object",
        default: {
            value: "auto",
            unit: "px"
        }
    },

    // Tablet
    widthTablet: {
        type: "object",
        default: {
            value: 100,
            unit: "%"
        }
    },
    heightTablet: {
        type: "object",
        default: {
            value: "auto",
            unit: "px"
        }
    },

    // Mobile
    widthMobile: {
        type: "object",
        default: {
            value: 100,
            unit: "%"
        }
    },
    heightMobile: {
        type: "object",
        default: {
            value: "auto",
            unit: "px"
        }
    }
}
```

### 2. Panel Ustawień

W panelu bocznym edytora należy dodać nową zakładkę "Wymiary", która będzie zawierać:

1. Przełącznik między widokami urządzeń (desktop, tablet, mobile)
2. Dla każdego urządzenia:
    - Pole do wprowadzania szerokości (wartość + jednostka)
    - Pole do wprowadzania wysokości (wartość + jednostka)
    - Możliwość wyboru jednostek (px, %, vw, vh)

### 3. Responsywne Style

Należy zaimplementować responsywne style CSS, które będą:

-   Automatycznie dostosowywać wymiary obrazu w zależności od rozmiaru ekranu
-   Uwzględniać breakpointy:
    -   Desktop: > 1024px
    -   Tablet: 768px - 1024px
    -   Mobile: < 768px

### 4. Wymagania Techniczne

#### Breakpointy

```css
/* Desktop */
@media (min-width: 1025px) {
    .responsive-image-block {
        width: var(--width-desktop);
        height: var(--height-desktop);
    }
}

/* Tablet */
@media (max-width: 1024px) and (min-width: 769px) {
    .responsive-image-block {
        width: var(--width-tablet);
        height: var(--height-tablet);
    }
}

/* Mobile */
@media (max-width: 768px) {
    .responsive-image-block {
        width: var(--width-mobile);
        height: var(--height-mobile);
    }
}
```

#### Walidacja

-   Wartości nie mogą być ujemne
-   Wartości procentowe nie mogą przekraczać 100%
-   Wysokość może być ustawiona na "auto"

### 5. Kryteria Oceniania

1. **Funkcjonalność**

    - Poprawne działanie na wszystkich urządzeniach
    - Płynne przejścia między breakpointami
    - Poprawna walidacja wartości

2. **Kod**

    - Czytelność i organizacja kodu
    - Zgodność z wytycznymi WordPress
    - Optymalizacja wydajności

3. **UX/UI**

    - Intuicyjny interfejs użytkownika
    - Responsywność i płynność działania
    - Spójność z interfejsem WordPress

4. **Dokumentacja**
    - Komentarze w kodzie
    - Opis implementacji
    - Instrukcja użycia

### 6. Wskazówki

1. Wykorzystaj komponenty WordPress:

    - `RangeControl` do wprowadzania wartości
    - `SelectControl` do wyboru jednostek
    - `TabPanel` do przełączania między urządzeniami

2. Pamiętaj o:

    - Zachowaniu proporcji obrazu
    - Optymalizacji wydajności
    - Obsłudze różnych jednostek miary

3. Przetestuj:
    - Na różnych urządzeniach
    - Z różnymi rozmiarami obrazów
    - Z różnymi kombinacjami wymiarów

## Termin Wykonania

Zadanie należy wykonać w ciągu 7 dni od otrzymania.

## Sposób Dostarczenia

1. Sforkuj repozytorium
2. Wykonaj zadanie w nowym branchu
3. Utwórz pull request
4. Dołącz opis implementacji i testów

## Kontakt

W przypadku pytań lub wątpliwości, prosimy o kontakt z zespołem rekrutacyjnym.
