import { createRouter, createWebHistory, type NavigationGuard } from 'vue-router';
import type { Component } from 'vue';
import LayoutDefault from '@/layouts/Default/LayoutDefault.vue';

export enum LayoutName {
  Default = 'Default',
  Empty = 'Empty',
}

export enum RouteName {
  Home = 'Home',
  Page404 = 'Page404',
}

export const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      name: RouteName.Home,
      path: '/',
      component: () => import('@/views/Home'),
      meta: { layout: LayoutName.Default },
    },
    {
      name: RouteName.Page404,
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/Page404'),
      meta: { layout: LayoutName.Empty },
    },
  ],
});

const loadLayout: NavigationGuard = async (to) => {
  if (!to.meta.layout) {
    to.meta.layoutComponent = LayoutDefault;

    return;
  }

  await import(`@/layouts/${to.meta.layout}/index.ts`)
    .then(({ default: LayoutComponent }: { default: Component }) => {
      to.meta.layoutComponent = LayoutComponent;
    })
    .catch((err) => {
      console.error(`Error while loading ${to.meta.layout} layout:`, err);
      to.meta.layoutComponent = LayoutDefault;
    });
};

router.beforeEach(loadLayout);
