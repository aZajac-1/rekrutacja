# WordPress Development Environment

Ten projekt zawiera konfigurację do uruchomienia środowiska WordPress w GitHub Codespaces.

## Jak uruchomić

1. Otwórz ten projekt w GitHub Codespaces
2. Poczekaj na zainicjalizowanie środowiska (automatycznie uruchomią się kontenery Docker)
3. Po zakończeniu inicjalizacji, otwórz przeglądarkę pod adresem: `http://localhost:8000`

## Dostęp do WordPress

-   URL: `http://localhost:8000`
-   Baza danych MySQL jest dostępna na porcie 3306
-   Dane dostępowe do bazy danych:
    -   Database: wordpress
    -   Username: wordpress
    -   Password: wordpress
    -   Host: db

## Struktura projektu

-   `wp-content/` - katalog z motywami i wtyczkami
-   `docker-compose.yml` - konfiguracja kontenerów Docker
-   `.devcontainer/` - konfiguracja środowiska GitHub Codespaces

## Uwagi

-   Wszystkie zmiany w plikach WordPress są automatycznie synchronizowane
-   Baza danych jest przechowywana w wolumenie Docker, więc dane są zachowywane między uruchomieniami
-   Port 8000 jest automatycznie przekierowywany w GitHub Codespaces
