import {Route} from '@angular/router';
import {CreateArticleComponent} from './components/createArticle/createArticle.component';

export const routes: Route[] = [
  {
    path: '',
    component: CreateArticleComponent,
  },
];
