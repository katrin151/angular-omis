import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items = [{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/~CAAAOSwGyZeTpc5/s-l225.webp","title":"Original Samsung AKG Headphones Earplugs Headset For Galaxy S8 S9 S10 + S7 Edge","price":"3.99","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/4oAAAOSwDb5fNn2m/s-l225.webp","title":"Bluetooth 5.0 Headset TWS Wireless Earphones Mini Earbuds Pods Stereo Headphones","price":"11.98","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/IQUAAOSwoqFeUzzM/s-l225.webp","title":"Mini Earbuds Stereo Headphones Bluetooth 5.0 Headset TWS Wireless Earphones","price":"10.68","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/amQAAOSwGMVfTFg0/s-l225.webp","title":"Bluetooth 5.0 Headset TWS Wireless Earphones Mini Earbuds IPX7 Stereo Headphones","price":"14.21","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/4AkAAOSwM6Zd355D/s-l225.webp","title":"Wireless Sports In-Ear Earphones Bluetooth 4.2 Stereo Headphones Headsets W/ Mic","price":"5.32","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/yTcAAOSwyNJfMRHn/s-l225.webp","title":"TWS Bluetooth 5.0 Wireless Earphones Headphones Earbuds Mini Stereo Headset IPX7","price":"14.50","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/t1YAAOSw14ZeVSyP/s-l225.webp","title":"Bluetooth Lightning Earphone Headphones For iPhone 7 8 X 10 XR XS 11 Pro Pro Max","price":"7.32","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/jqsAAOSwmZpfS~Ht/s-l225.webp","title":"New ListingB&O BANG&OLUFSEN H5 wireless bluetooth headphones - BLK","price":"58.66","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3v0AAOSwcyVcn0wl/s-l225.webp","title":"Samsung AKG Headphones Headset Earphones EarBuds Galaxy S9 S8 S8+ S7 S6 Note 9 8","price":"3.97","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/x9sAAOSw7vRfTLNx/s-l225.webp","title":"New ListingQCY Bluetooth 5.0 TWS Earbuds Headphones with Dual Mic Sports Headset Box Y1A7","price":"15.13","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/TI0AAOSwnfpfPllm/s-l225.webp","title":"New ListingSony WHH910NL H.ear 3 Wireless Noise Cancelling Headphones (Blue)","price":"146.22","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/juUAAOSwdCVe3frQ/s-l225.webp","title":"TWS Bluetooth 5.0 Earbuds True Wireless Stereo Headphones Mini Headset Earphones","price":"6.87","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/-jwAAOSwVxZfTOnu/s-l225.webp","title":"New ListingJBL T280A Stereo Ear Headphones/Phone Headset Black Pearl - SILVER","price":"50.00","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/X5MAAOSwlJlfTQtS/s-l225.webp","title":"New ListingMONSTER HIGH HEADPHONES WITH MICROPHONE foldable brand new unopened packaging","price":"6.65","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/QXkAAOSwA9ter91i/s-l225.webp","title":"Over Ear Foldable Stereo Noise Cancelling Headset Bluetooth Wireless Headphones","price":"11.54","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/cwYAAOSwD5NfIrML/s-l225.webp","title":"1XTWS Bluetooth 5.0 Earbuds Wireless Headphones Stereo Earphone Mini P4X9","price":"13.02","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/QdQAAOSwm69ehlwF/s-l225.webp","title":"Bluetooth Wireless Smart Sport Running Headphones - Foldable neckband Earphones","price":"19.98","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/b0YAAOSwTltfBEGD/s-l225.webp","title":"Wireless Headphones Bluetooth Headset Noise Cancelling Stereo Over Ear Earphones","price":"26.65","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/h4sAAOSw4yte37Gu/s-l225.webp","title":"NEW Audio-Technica ATH-AR5BT High Res Wireless Bluetooth Headphones - White","price":"93.30","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/aycAAOSw6HtdZADY/s-l225.webp","title":"Bluedio T7 Plus Bluetooth Headphones User-defined Active Noise Cancelling Wirele","price":"49.99","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/a~sAAOSwvIpfTE5~/s-l225.webp","title":"New ListingSONY Headphones Wired Black x Red Good Condition Authentic Japan Limited","price":"37.99","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/SWUAAOSwPR5fTL9-/s-l225.webp","title":"New ListingBeats by Dr. Dre BeatsX In-Ear Bluetooth Headphones (Satin Silver / Icon)UK*us","price":"139.98","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Na0AAOSwIvBcKaqq/s-l225.webp","title":"New Bluetooth Headphones Marshall Major II 2 Mic HIFI Noise Cancelling Deep Bass","price":"46.55","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/b5EAAOSwARxfTEZf/s-l225.webp","title":"New ListingCowin E7 Active Noise Cancelling Wireless Bluetooth Headphones - Black","price":"20.00","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/-UkAAOSwprtcOWe-/s-l225.webp","title":"New ListingBose QuietComfort 35 II Wireless Headphones Noise Cancelling Black Silver UK*us","price":"309.28","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/SlEAAOSw~O1ehTyG/s-l225.webp","title":"Samsung Earphones Headphones AKG ORIGINAL Galaxy s8 s9 s10s10Plus Note 8 & mic.","price":"7.17","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/eKYAAOSwWGFfTLfc/s-l225.webp","title":"New ListingOneodio 80h Wireless Bluetooth 5.0 Bass Headset Wired Gaming Headphones With Mic","price":"62.19","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Z8gAAOSw6atfTE5~/s-l225.webp","title":"New Listing[Genuine product] SONY DR-220 Stereo headphones with microphone Japan Limited","price":"37.99","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/rK0AAOSwdcNdKG7D/s-l225.webp","title":"Skullcandy Over-Ear DJ Audio Headphones Method Man Foldable with Mic","price":"66.59","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/cO4AAOSwDjNe3feV/s-l225.webp","title":"Bluetooth 5.0 Headset TWS Wireless Earphones Mini Earbuds IPX6 Stereo Headphone","price":"8.97","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/LcUAAOSw~7FfSCJ3/s-l225.webp","title":"Wireless Earphones Mini Earbuds Stereo Headphones Bluetooth 5.0 Headset TWS IPX6","price":"15.80","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/WKgAAOSwGhBe63we/s-l225.webp","title":"New ListingBeats by Dr. Dre Solo2 Wired On-Ear Headphones - Blue","price":"17.30","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/RpAAAOSwiYJfBEYO/s-l225.webp","title":"New ListingJBL LIVE 650BTNC OVER-EAR WIRELESS NOISE CANCELLING HEADPHONES (WHITE) RRP$249","price":"143.28","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qMkAAOSwUIlerr7i/s-l225.webp","title":"New ListingJabra Sport Coach Bluetooth Headphones OTE20 ","price":"33.33","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/kdUAAOSw4UtWSanz/s-l225.webp","title":"YAMAHA EPH-W32 In-Ear Headphones With Wireless Unit Blue Black Gold from Japan","price":"136.55","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/93cAAOSwPile8KMo/s-l225.webp","title":"New ListingAkia On Ear Headphones A58069","price":"16.00","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/U2cAAOSwDvlfTE6A/s-l225.webp","title":"New ListingSONY Bluetooth Headphones Headphones WITH charger Good Condition Japan Limited","price":"52.99","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/cXgAAOSw6KhfTFmw/s-l225.webp","title":"New ListingSONY WH-1000XM4 Premium Wireless Bluetooth Noise-Cancelling Headphones Brand New","price":"465.24","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/7T4AAOSwOyxfJkGX/s-l225.webp","title":"Mini Earbuds Headphones Lightweight & Charging Box for Running Cycling","price":"16.17","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/dIsAAOSwMX1fTFgK/s-l225.webp","title":"New ListingEarphones Headphones Headset Earbuds In-Ear Bass Stereo Hi-Fi with MIC Wired","price":"5.27","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/oEEAAOSw81RfTE6A/s-l225.webp","title":"New ListingSony Headphones Blue x Black Good Condition Japan Limited Authentic","price":"41.99","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ME0AAOSw3nJfTJco/s-l225.webp","title":"New ListingA10 TWS BT 5.0 Headphones Wireless Sport Headset with Mic Digital Display I3N8","price":"11.80","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/c4oAAOSwtzVfTE6A/s-l225.webp","title":"New ListingSony Headphones Black x Red Good Condition Japan Limited Authentic","price":"41.99","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/1J4AAOSw5XRfTJMQ/s-l225.webp","title":"New ListingF9 Bluetooth Headphones Over Ear Headset Wireless Sport Stereo Headphone UK T8I3","price":"13.18","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/-58AAOSw8iJfTO6q/s-l225.webp","title":"New Listingpanasonic wireless noise cancelling headphones  RP-HD610N","price":"146.22","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/RkwAAOSwcddfTKXV/s-l225.webp","title":"New ListingQCY Bluetooth 5.0 TWS Headphone with Dual Mic Wireless Sport Stereo Headset X2O0","price":"33.26","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/KeQAAOSwZutfADrw/s-l225.webp","title":"New ListingBeats by Dr. Dre Solo3 Wireless Headphones - MATTE BLACK","price":"110.03","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/JskAAOSwgW9cw0pj/s-l225.webp","title":"Replacement Dr. Dre Beats Pro / Detox Headphones Black Ear Pads","price":"11.85","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/DOMAAOSw6wpe8aGd/s-l225.webp","title":"Google Pixel Buds Gen 2 True Wireless Earbud Headphones GA01470-US Clearly White","price":"175.00","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/XFEAAOSweZhfDsOR/s-l225.webp","title":"New ListingBeats by Dr. Dre Solo3 Wireless Headphones - ROSE GOLD-   Clearance","price":"112.95","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/PoQAAOSw4wRdZR3O/s-l225.webp","title":"Bluetooth Wireless Headphones Over Ear Foldable Stereo Noise Cancelling Headset","price":"14.55","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/BU4AAOSwgVZfTE6A/s-l225.webp","title":"New ListingSONY Sony Headphone Headphones Blue Good Condition Japan Limited","price":"41.99","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/BMgAAOSwGLpfSY9g/s-l225.webp","title":"New ListingBaseus Encok TWS BT 5.0 True Wireless Headphones NGW09-06 Earbuds Built-in U8V1","price":"27.77","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/lOcAAOSwzM5fTKXq/s-l225.webp","title":"New ListingA7 TWS Bluetooth Headphones Wireless In-ear Stereo Music Headsets with Mic E6V7","price":"19.53","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/6CQAAOSw5vxcURrF/s-l225.webp","title":"New ListingSony WH-1000XM3 Wireless Noise Canceling Over-Ear Headphones Black UK*us","price":"293.28","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/k~oAAOSwBZBcDz9o/s-l225.webp","title":"New ListingBrand New Sony WH-1000XM3 Wireless Noise Canceling Over-Ear Headphones Silver*us","price":"290.62","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/S14AAOSw9~Neyv5C/s-l225.webp","title":"New ListingPlantronics BackBeat GO 600 Over-Ear Wireless Headphones 18h 🔋 - Black","price":"53.31","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/lt0AAOxy7vJTd2Ef/s-l225.webp","title":"3.5mm Wired Gaming Headset MIC PS4 Earphones Headphones PlayStation 4 Pro Slim","price":"6.65","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/BiAAAOSw6dhfTE6A/s-l225.webp","title":"New ListingSONY Headphones White Very Good Condition Genuine Authentic Japan Limited","price":"33.99","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/xDUAAOSwzV5fTJ~f/s-l225.webp","title":"New ListingBluetooth Headphones HiFi Stereo Wireless Headphones SD/TF Card Mode Golden","price":"18.98","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/s7MAAOSwvApaJ8CD/s-l225.webp","title":"Genuine Sennheiser MX375 In-Ear Headphones Earphones - Black New","price":"20.99","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/0pIAAOSwSa9emZFa/s-l225.webp","title":"K2 3.5mm Wired Headphones In-Ear Headset Stereo Music Earphone Smart Phone Y5I6","price":"7.50","category":"headphones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/~90AAOSwmsxe~Gan/s-l225.webp","title":"3.5mm Stereo Gaming Headset Headphones Earphone For PS4 Wired With Microphone","price":"10.88","category":"headphones"},

{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/n-UAAOSwnpleTps0/s-l225.webp","title":"Samsung AKG Earplug Headset Earphones EarBuds Galaxy S9 S8 S8+ S7 S6 Note 9 8 A5","price":"3.99","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3-AAAOSwxrJebEdj/s-l225.webp","title":"Bluetooth 5.0 Wireless Earphone Headphone Android Earbud Headset Headset Earbuds","price":"4.99","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ZMYAAOSwYKZfRxOQ/s-l225.webp","title":"Wireless Bluetooth 5.0 Earphones Headphones TWS Mini Earbuds Waterproof Headset","price":"6.29","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/eUgAAOSwEOhfR6C-/s-l225.webp","title":"Redmi Airdots Wireless Earbuds True Bluetooth 5.0 Deep Bass Earphone 2020","price":"12.99","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/6roAAOSwUgBfLWuh/s-l225.webp","title":"Original xiaomi mi headphones redmi airdots earbuds Bluetooth 50 tws true","price":"24.99","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/L7YAAOSwU7Jd8zpE/s-l225.webp","title":"Hot Bluetooth 5.0 Headset TWS Wireless Earphones Mini Stereo Headphones Earbuds","price":"13.89","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/nh0AAOSwgn5fRxFh/s-l225.webp","title":"W12 Bluetooth 5.0 Mini Headset TWS Wireless Earphones Earbuds Stereo Headphone","price":"7.22","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/amYAAOSwrk5fTICM/s-l225.webp","title":"New Listingwhite headset  Earphone Handfree Headphone Earbuds Mic&Remote Volume Control ","price":"0.01","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/xMoAAOSwxQtfKmJ5/s-l225.webp","title":"XiaoMi Redmi AirDots Wireless TWS Bluetooth V5.0 Earphone Active Earbuds Headset","price":"29.99","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/E6UAAOSwVH1fKoB3/s-l225.webp","title":"Bluetooth 5.0 Headset TWS Wireless Earphones Mini Earbuds Stereo Dual Headphones","price":"12.99","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/wBMAAOSwMIhfTQxz/s-l225.webp","title":"New ListingTWS Bluetooth Headset 5.0 Wireless Waterproof Earbuds LED HIFI Sports Headset","price":"16.99","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/J7oAAOSwCppfTDjU/s-l225.webp","title":"New ListingHOCO Wired Lightning Super Bass Stereo Earbuds Volume Adjustment Sport Earphones","price":"11.99","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/TMEAAOSwCXlfTKRo/s-l225.webp","title":"New ListingWireless Bluetooth Headphones Earbuds W/Mic Headset Sports Sweatproof","price":"6.79","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/fjIAAOSwdLJfNi9V/s-l225.webp","title":"SoundPEATS Truengine 3 SE True Wireless Earbuds Bluetooth ","price":"47.99","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Nt0AAOSwTxhfEVel/s-l225.webp","title":"New ListingWireless Bluetooth 5.0 Headphones TWS Earbuds Waterproof Headset U3A3","price":"12.30","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/tXAAAOSw9OJfCU3L/s-l225.webp","title":"New ListingTWS Wireless Bluetooth Headphones Earphones Earbuds For iPhone Samsung A0U9","price":"11.49","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Ig4AAOSws6tfMct8/s-l225.webp","title":"New Listing5.0 Headset TWS Wireless Earphones Earbuds Stereo Bluetooth Headphones V8L0","price":"14.38","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/MJAAAOSw0glfRM9q/s-l225.webp","title":"PodsPro Bluetooth 5.0 TWS Wireless Touch Earbuds Sports Headset W/Charging Box","price":"13.40","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/MKAAAOSwZR1fTKRo/s-l225.webp","title":"New ListingStylish  Wireless Earbuds Touch Function Headphones Headset For Sports","price":"12.13","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/r-0AAOSwOFNfH-F1/s-l225.webp","title":"Bluetooth 5.0 Headset TWS Wireless Earphones Mini Stereo Headphones Earbuds","price":"11.29","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Uu4AAOSwKnlfTIFb/s-l225.webp","title":"New ListingWireless 5.0 Headphone Earbuds Wireless Earphones US","price":"8.95","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/FRAAAOSwq4BfSiTJ/s-l225.webp","title":"1 Set Earbuds Chic Safe Fine Charging Case In-ear Headset Wireless Earbud","price":"13.04","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/lUMAAOSwr65fI6dz/s-l225.webp","title":"New ListingWaterproof Earphones Earbuds TWS Bluetooth V5.0 Stereo Wireless Sports Z1J7","price":"14.16","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/8lkAAOSw3KxfTJsX/s-l225.webp","title":"New ListingNoise Cancelling Waterproof Bluetooth 5.0 Earbuds Headphones Wireless Headset U","price":"12.69","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/x1gAAOSwMQBfTIEo/s-l225.webp","title":"New Listing2020 Wireless 5.0 Headset Earbuds Waterproof Headphones Ear hook Earphone Stereo","price":"15.97","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/HQoAAOSwfTpfTMGA/s-l225.webp","title":"New Listing1 Set Wireless Earphone Neck Hanging Digital Earbuds Sports In-ear Headset","price":"20.07","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/zYQAAOSwWx1fTPRx/s-l225.webp","title":"New ListingA6 Mini Bluetooth 5.0 Wireless TWS Earbuds Earphones Stereo Headphone With Box","price":"9.00","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5j4AAOSwxuNfTPaz/s-l225.webp","title":"New ListingBluetooth 5.0 Headset TWS Wireless Earphones Mini Earbuds Stereo Headphones R1S3","price":"12.49","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/XXUAAOSwKTZfTJcI/s-l225.webp","title":"New ListingBluetooth 5.0 TWS Wireless Earphones Twins Earbuds Headphone Stereo Headset N4J4","price":"11.44","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/6AoAAOSwhN9fMMpa/s-l225.webp","title":"Twins Earbuds 9D Stereo Headphones bluetooth 5.0 Headset TWS Earphones V4N7","price":"11.45","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/-mcAAOSwPspe~rfB/s-l225.webp","title":"New ListingBluetooth 5.0 Headset TWS Wireless Earphones Mini Stereo Earbuds l0z1 P1P1","price":"13.51","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/jpEAAOSwTjdfTK~U/s-l225.webp","title":"New Listing5.0 Earphones Wireless Bluetooth TWS Headphones Mini Earbuds Waterproof Headset","price":"11.25","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/8-0AAOSwCQJfH9xF/s-l225.webp","title":"TWS Wireless Bluetooth 5.0 Earphones Headphones Mini Earbuds Waterproof Headset","price":"10.65","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/AlYAAOSwVJFeGhc5/s-l225.webp","title":"JOYROOM JR-TL2 TWS BT 5.0 Headset In-ear Stereo Earphone Sports Binaural Earbuds","price":"25.80","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/S~MAAOSwm~BfTGel/s-l225.webp","title":"New ListingL21 Wireless Bluetooth 5.0 Mini Earbuds Digital Display Handsfree Stereo Headset","price":"10.75","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/~~0AAOSwxUFfTLyR/s-l225.webp","title":"New Listing1 Set Waterproof Stereo Wireless Earphone Fashion Sports Earbuds for Sports","price":"9.38","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/N54AAOSwNIdfI94o/s-l225.webp","title":"New ListingTWS Bluetooth 5.0 Earbuds Wireless Headphones Stereo Waterproof Earphone W7O2","price":"11.95","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/epwAAOSwG8Neg~L-/s-l225.webp","title":"Waterproof IPX5 TWS Earbuds Bluetooth5.0 Stereo HIFI Earphones w/ Dual Mic","price":"35.83","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mVAAAOSw58ZevNBG/s-l225.webp","title":"Bluedio Waterproof Stereo Headsets Fi Bluetooth Earphone TWS Wireless Earbuds","price":"32.05","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/HBAAAOSwz1ZfEVCT/s-l225.webp","title":"New ListingWaterproof Wireless Bluetooth V5.0 Earphones Headphones Headset Earbuds X1F7","price":"13.44","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/v0QAAOSwAf5fTH9y/s-l225.webp","title":"New Listing2020 Ergonomics Wireless Headphones Sports Mini In-ear Earphones Stereo Earbuds","price":"13.60","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Ng0AAOSwp6ZfTO-8/s-l225.webp","title":"New ListingA16 bluetooth Headset TWS Wireless Sport Earphones Earbuds With Charging W4O4","price":"13.04","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/K9oAAOSwpo9fTGeL/s-l225.webp","title":"New ListingH6 Wireless Bluetooth 5.0 Mini Earbuds Digital Display Handsfree Headset","price":"10.71","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/DboAAOSwWg5fPKZM/s-l225.webp","title":"2020 Original - Xiaomi AirDots Air 2 Bluetooth 5.0 Earphones TWS Earbuds Headset","price":"24.27","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/jksAAOSwDtFduQqV/s-l225.webp","title":"New ListingBluetooth 5.0 Wireless Earbuds Headset V5/X8S Earphones Mini Stereo Headphone","price":"28.49","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mAcAAOSwMX1fTIDi/s-l225.webp","title":"New ListingErgonomics Wireless Headset Sports Headphones In-ear Earphones Stereo Earbuds","price":"13.60","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/hLEAAOSwmqFfESm2/s-l225.webp","title":"New ListingWireless Earbuds Bluetooth 5.0 Earphones IPX5 Waterproof Touch Control Earbuds","price":"0.89","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/b~IAAOSwf~tfTGfW/s-l225.webp","title":"New ListingL21 Wireless Bluetooth 5.0 Mini Earbuds Handsfree Headset with Charging Case","price":"10.53","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/4CkAAOSw2rheTkKC/s-l225.webp","title":"New ListingTWS BT 5.0 Headset Wireless Earphones Mini Earbuds Stereo Headphone Black","price":"13.46","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/27oAAOSwfPlfIjlm/s-l225.webp","title":"New ListingXT-01 TWS 5.0 Bluetooth Wireless Sports Earphones Headphone Headset Earbuds Mic","price":"12.10","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/wJ8AAOSwHAdfLSIc/s-l225.webp","title":"Earbuds Headphones Power Bank Bluetooth Headset 5.0 Wireless Best Earphones H8P9","price":"14.21","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/f38AAOSwstxfJX1h/s-l225.webp","title":"Sale ! Xiaomi Air2 SE TWS Mi Wireless Bluetooth Earphone Earbuds AirDots Pro 2SE","price":"24.44","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/q2AAAOSwQF1fTK93/s-l225.webp","title":"New Listing5.0 Bluetooth Wireless Earphone Headphone Universal Touch Earbud Headset Earbuds","price":"11.51","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/VkwAAOSw6vtfLR~h/s-l225.webp","title":"TWS Bluetooth 5.0 Earbuds Wireless Stereo in-Ear Noise Reduction Headphones J8C3","price":"12.17","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/fRYAAOSwXR1fShJd/s-l225.webp","title":"New Listing2020 Bluetooth 5.0 Headset TWS Wireless Earphones Mini Earbuds In-Ear Headphones","price":"13.99","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/8fkAAOSwrJpfTIEX/s-l225.webp","title":"New ListingLED Wireless 5.0 Headset Twins Wireless Headphone Stereo Earphones Earbuds pw","price":"12.18","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/OeAAAOSwucVfEBQw/s-l225.webp","title":"New Listing5.0 TWS Bluetooth Headsets Wireless Earbuds Earphone Noise Cancelling Mic ","price":"0.99","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/J8sAAOSw78BfMM-N/s-l225.webp","title":"Headphone-Headset-Earbuds Bluetooth-Wireless-Touch-Sports-Earphones Nice B1S6","price":"10.76","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/d8cAAOSw7kRfTK-z/s-l225.webp","title":"New ListingBluetooth 5.0  Headset  Wireless Earphones Earbuds","price":"8.75","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/B-kAAOSwikBfCSP3/s-l225.webp","title":"New ListingTWS Bluetooth Earphone 5.0 Waterproof IPX7 HD Stereo Earbuds Wireless Y0T5","price":"11.28","category":"Earbuds"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/SmMAAOSwAtZe38XM/s-l225.webp","title":"New ListingBluetooth 5.0 Headset TWS Wireless Earphones Mini Stereo Earbuds l0z0 I2L7","price":"11.24","category":"Earbuds"}]



  constructor() { }

getItems(): Item[] {
   return this.items.slice();
   }
  
   addItem(item: Item): void {
      this.items.push(item);
   }
}
