@echo off
REM Setup script for Jekyll Math Portfolio on Windows

echo Setting up Jekyll Math Portfolio...

REM Check if Ruby is installed
ruby --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Ruby is not installed. Please install Ruby first.
    pause
    exit /b 1
)

REM Check if Bundler is installed
bundle --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Installing Bundler...
    gem install bundler
)

REM Install dependencies
echo Installing Jekyll and dependencies...
bundle install

REM Build the site
echo Building the site...
bundle exec jekyll build

echo Setup complete! Run 'bundle exec jekyll serve' to start the development server.
pause
