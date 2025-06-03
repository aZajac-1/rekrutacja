# Projekt Rekrutacyjny - WordPress Developer

## Opis Projektu

Ten projekt jest częścią procesu rekrutacyjnego na stanowisko WordPress Developera. Zadanie polega na rozbudowie istniejącego bloku obrazu w WordPressie, dodając do niego nowe funkcjonalności i optymalizując jego działanie.

## Wymagania Techniczne

-   PHP 8.0+
-   WordPress 6.0+
-   Node.js 16+
-   Docker i Docker Compose

## Instalacja i Konfiguracja

### 1. Sklonuj repozytorium

```bash
git clone [URL_REPOZYTORIUM]
cd Rekrutacja
```

### 2. Uruchom środowisko Docker

```bash
docker-compose up -d
```

### 3. Skonfiguruj WordPress

-   Otwórz przeglądarkę i przejdź do `http://localhost:8080`
-   Wykonaj standardową instalację WordPressa
-   Zaloguj się do panelu administracyjnego

### Dane dostępowe do panelu administracyjnego

-   Login: ola
-   Hasło: qMsUiiyIF9!dc#D!hn

## Struktura Projektu

```
Rekrutacja/
├── wordpress/              # Główny katalog WordPress
│   └── wp-content/
│       └── plugins/
│           └── akk2blocks/ # Plugin z blokami
├── docker-compose.yml      # Konfiguracja Docker
├── wordpress.conf         # Konfiguracja Nginx
├── uploads.ini           # Konfiguracja PHP dla uploadów
└── wp-config.php         # Konfiguracja WordPress
```

## Zadanie Rekrutacyjne

### Cel

Rozbudowa istniejącego bloku obrazu (`responsiveImage.js`) o nowe funkcjonalności i optymalizacja jego działania.

### Wymagania

1. Rozbudowa istniejącego bloku o:

    - Responsywne ustawienia obrazu

2. Implementacja powinna uwzględniać:
    - Responsywność na różnych urządzeniach
    - Optymalizację wydajności
    - Czytelność i utrzymywalność kodu
    - Zgodność z wytycznymi WordPress

### Kryteria Oceniania

-   Jakość kodu i jego organizacja
-   Zgodność z wytycznymi WordPress
-   Responsywność i wydajność
-   Czytelność i dokumentacja kodu
-   Innowacyjność rozwiązań

## Przydatne Linki

-   [Dokumentacja WordPress](https://developer.wordpress.org/)
-   [Dokumentacja Gutenberg](https://developer.wordpress.org/block-editor/)
-   [Dokumentacja Docker](https://docs.docker.com/)

## Kontakt

W przypadku pytań lub problemów, prosimy o kontakt z zespołem rekrutacyjnym.

## Licencja

Ten projekt jest przeznaczony wyłącznie do celów rekrutacyjnych.

## Github code sprawdzenie adresu aplikacji

docker inspect rekrutacja-db_rekrutacja-1 | grep IPAddress | cat
