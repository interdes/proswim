import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import L from 'leaflet';
import './globalOptions';
import './formValidation';
import './libs/helpers';
import '../blocks/js-functions/truncate';
import anchor from '../blocks/js-functions/anchor';
import { freezebuttons } from '../blocks/js-functions/freeze';
import scrollanimation from '../blocks/js-functions/scrollanimation';
import { enableInput, selects, sliders, datepicker, inputmask, numberinput, labelInput } from '../blocks/form-elements/form-elements';
import popups from '../blocks/popups/popups';
import scrollbar from '../blocks/scrollbar/scrollbar';
import slider from '../blocks/slider/slider';
import tooltips from '../blocks/tooltip/tooltip';
import tabs from '../blocks/tabs/tabs';
import maps from '../blocks/map/map';
import sortDropdowns from '../blocks/sort-dropdown/sort-dropdown';
import '../blocks/product-main-slider/product-main-slider';
import '../blocks/rating/rating';
import '../blocks/accordion/accordion';
import '../blocks/dropdown/dropdown';
import '../blocks/shopmenu/shopmenu';
import '../blocks/vertical-menu/vertical-menu';
import '../blocks/put-block-into-slot/put-block-into-slot';
import '../components/product-description/product-description';
import '../components/header/header';
import '../components/product-card/product-card';
import '../components/hero-slider/hero-slider';
import '../components/burger/filterBurger';
import '../components/brands-section/brands-section';
import '../components/products-section/products-section';
import '../components/articles-section/articles-section';
import '../blocks/section/section';
import '../blocks/review-form/review-form';
import '../blocks/total/total';
import '../blocks/searchbar/searchbar';
import '../blocks/upload-photo/upload-photo';
import '../components/product-item-section/product-item-section';
import '../components/footer/footer';
import '../components/orders-section/orders-section';
import '../components/content-slider/content-slider';
import '../blocks/compare-button/compare-button';
import '../blocks/totop/totop';
import compare from '../components/comparison-table/comparison-table';

const $ = window.$;
window.L = L;

$(() => {
  svg4everybody();
  objectFitImages();
  scrollbar();
  anchor();
  freezebuttons();
  enableInput();
  selects();
  sliders();
  popups();
  slider();
  tooltips();
  tabs();
  datepicker();
  inputmask();
  numberinput();
  maps();
  scrollanimation();
  sortDropdowns();
  compare();

  setTimeout(() => {
    labelInput();
  }, 100);
});
