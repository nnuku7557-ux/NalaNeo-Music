import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nalaneomusic.app',
  appName: 'NalaNeoMusic',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LocalNotifications: {
      smallIcon: 'ic_stat_music_note',
      iconColor: '#7C3AED',
    }
  },
  android: {
    allowMixedContent: true,
    backgroundColor: '#0F0A1E'
  },
  ios: {
    backgroundColor: '#0F0A1E',
    contentInset: 'always'
  }
};

export default config;
