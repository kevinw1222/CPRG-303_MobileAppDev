# Setup Guideline
<i>*** This instruction is for macOS ***</i>

<h2>1. System Requirements:</h2>
<ul>• Operating System: macOS 12 or newer / Windows 10 or newer</ul>
<ul>• CPU: A multi-core processor</ul>
<ul>• RAM: 8GB (Minimum), 16GB or more (Recommend)</ul>

<h2>2. Installation Instructions:</h2>
<h3>Prerequisite Tools:</h3>
<ul>• <a href="https://developer.android.com/studio?gclid=Cj0KCQjwhfipBhCqARIsAH9msbm4_uY9Gk1CD0Ph-TduOSt8CgrW-HrQ0VVhxtL0Nifin_AilogUekoaAiJuEALw_wcB&gclsrc=aw.ds">Android Studio</a></ul>
<ul>• <a href="https://brew.sh">Homebrew</a></ul>
<ul>• <a href="https://nodejs.org/en">Node.js</a> LTS (Recommend)</ul>
<ul>• <a href="https://apps.apple.com/ca/app/xcode/id497799835?mt=12">Xcode</a></ul>
<ul>• <a href="https://github.com/rbenv/rbenv">Ruby</a> 2.7.4 or Newer</ul>

<h2>3. Configurations Steps:</h2>
<h3>3.1 Setup Android Studio</h3>
<ul>• While the installation, choose "standard" install is fine, and wait for installation completes.</ul>
<ul>• Open Terminal & run: <code>nano ~/.zshrc</code> to modify zprofile.</ul>
<ul>• Input following code into the zprofile:
  <ul><code>export ANDROID_HOME=$HOME/Library/Android/sdk</code></ul>
  <ul><code>export PATH=$PATH:$ANDROID_HOME/emulator</code></ul>
  <ul><code>export PATH=$PATH:$ANDROID_HOME/platform-tools</code></ul>
</ul>
<ul>• Press <code>Ctrl</code>+<code>O</code> then <code>ENTER</code> to save changes.</ul>

<h3>3.2 Setup Homebrew</h3>
<ul>• Run following code: 
  <ul><code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code></ul>
</ul>
<ul>• Installation ≈ 5 mins. (Login password required)</ul>

<h3>3.3 Setup Node.js</h3>
<ul>• Download & Install <a href="https://nodejs.org/en">Node.js</a> LTS (Recommend), or;
  <ul>Download <a href="https://brew.sh">Homebrew</a> then input following code in Terminal: <code>brew install node</code></ul>
</ul>

<h3>3.4 Setup Xcode</h3>
<ul>• Download & install on <a href="https://apps.apple.com/ca/app/xcode/id497799835?mt=12">App Store</a> (recommend) or;
  <ul>Download & install an older verison at <a href="https://idmsa.apple.com/IDMSWebAuth/signin.html?path=%2Fdownload%2Fall%2F&appIdKey=891bd3417a7776362562d2197f89480a8547b108fd934911bcbea0110d07f757&rv=0">Apple Developer</a> (signin required)</ul>
</ul>
<ul>• Check Command Line Tools has been selected:
  <ul>Open Xcode -> Click Xcode on topleft corner -> Preferences -> Locations -> Command Line Tools</ul>
</ul>
<ul>• Check for System Update -> Another Update:
  <ul>Open System Preferences -> Software Update -> If "Another update is available" -> Select Command Line Tools</ul>
</ul>

<h3>3.5 Setup Ruby</h3>
<ul>• Install <a href="https://github.com/rbenv/rbenv">Ruby</a> (macOS required)
  <ul><code>brew install rbenv ruby-build</code></ul>
  <ul><code>rbenv init</code></ul>
  <ul><code>rbenv install 0.0.0</code> 2.7.4 or newer</ul>
  <ul><code>rbenv global 0.0.0</code> verison#</ul>
  <ul><code>rbenv local 0.0.0</code> version#</ul>
</ul>
<ul>• Run: <code>nano ~/.zshrc</code>
  <ul>Input following code: <code>eval "$(rbenv init - zsh)"</code> and save changes.</ul>
  <ul><i>** If setup not successful, please review step 3 again. **</i></ul>
</ul>

<h2>4. Project Creation:</h2>
<ul>• Run following command: <code>npx react-native@latest init ProjectName</code></ul>
<ul>• If you see your project like this, that means all setups are correctly!
  <img width="676" alt="Screen Shot 2023-10-30 at 9 55 14 AM" src="https://github.com/kevinw1222/CPRG-303_MobileAppDev/assets/119633334/605b6019-941b-4603-aa54-d40f2fdfbe17">
</ul>

<h2>5. Running the Project:</h2>
<ul>• Locate to project directory by running: <code>cd ProjectName</code></ul>
<ul>• Press <code>a</code> to run android platform.</ul>
<ul>• If you get into this step, Congratulations!!🎉🎉 You're free to develop your app.
  <img width="719" alt="Screen Shot 2023-10-30 at 9 50 18 AM" src="https://github.com/kevinw1222/CPRG-303_MobileAppDev/assets/119633334/2550633c-323a-45fa-ba6e-92eb9bf6b1e9">
</ul>
<ul>• Repeat step 5 and press <code>i</code> to launch iOS platform. (Need ≈ 5 mins to initialize)
  <img width="1047" alt="Screen Shot 2023-10-30 at 9 58 44 AM" src="https://github.com/kevinw1222/CPRG-303_MobileAppDev/assets/119633334/58777fc4-aa2a-4c84-b057-950b46893ca6">
</ul>

<h2>6. Troubleshooting:</h2>
<ul>Common Issues:</ul>
<ul>• If you see messages like this while initialize the project:
  <ul>Something like <code>android sdk 30.0.3 is corrupted</code></ul>
  <ul>Locate to directory: <code>../Library/Android/sdk/build-tools</code></ul>
  <ul>Remove folder 30.0.3 and relaunch the project again.</ul>
</ul>

<h2>7. Resources:</h2>
<ul>• React-Native setup tutorrial: <a href="https://reactnative.dev/docs/environment-setup?package-manager=npm&guide=native&platform=android">click here</a></ul>
<ul>• Homebrew: <a href="https://brew.sh">click here</a></ul>
<ul>• Ruby: <a href="https://github.com/rbenv/rbenv">click here</a></ul>
