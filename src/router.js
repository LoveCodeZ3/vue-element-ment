import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL, // base 基本路由请求路径设置
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '网站首页'
      },
      component: Home,
      children: [
        {
          path: 'index',
          name: 'home-message',
          meta: {
            title: '天津北方演艺集团'
          },
          component: () => import('./views/home-message')
        },
        {
          path: '/group/profile',
          name: 'group',
          meta: {
            title: '集团概况',
            id: 1
          },
          component: () => import('./views/group/group'),
          children: [
            {
              path: '/group/profile',
              name: 'profile',
              meta: {
                title: '集团简介',
                id: 1
              },
              component: () => import('./views/group/profile')
            },
            {
              path: '/group/setting',
              name: 'setting',
              meta: {
                title: '机构设置',
                id: 1
              },
              component: () => import('./views/group/setting')
            },
            {
              path: '/group/theatre',
              name: 'theatre',
              meta: {
                title: '剧场介绍',
                id: 1
              },
              component: () => import('./views/group/theatre')
            },
            {
              path: '/group/honor',
              name: 'honor',
              meta: {
                title: '集团荣誉',
                id: 1
              },
              component: () => import('./views/group/honor')
            },
            {
              path: '/group/we',
              name: 'we',
              meta: {
                title: '联系我们',
                id: 1
              },
              component: () => import('./views/group/we')
            }
          ]
        },
        {
          path: '/performing/news',
          name: '演艺之声',
          meta: {
            id: 2,
            title: '演艺之声'
          },
          component: () => import('./views/performing/performing'),
          children: [
            {
              path: '/performing/news',
              name: 'news',
              meta: {
                id: 2,
                title: '集团动态'
              },
              component: () => import('./views/performing/news'),
              children: [
                {
                  path: '/performing/news/newss',
                  name: 'newss',
                  meta: {
                    ispagin: 'ispagin',
                    title: '北方演艺集团党委召开第二次党员代表大会'
                  },
                  component: () => import('./views/performing/newss')
                }
              ]
            },
            {
              path: '/performing/column',
              name: 'column',
              meta: {
                id: 2,
                title: '政治专栏'
              },
              component: () => import('./views/performing/column'),
              children: [
                {
                  path: '/performing/column/columns',
                  name: 'columns',
                  meta: {
                    ispagin: 'ispagin',
                    title: '北方演艺集团党委召开第二次党员代表大会'
                  },
                  component: () => import('./views/performing/columns')
                }
              ]
            },
            {
              path: '/performing/review',
              name: 'review',
              meta: {
                id: 2,
                title: '戏剧评论'
              },
              component: () => import('./views/performing/review'),
              children: [
                {
                  path: '/performing/review/reviews',
                  name: 'reviews',
                  meta: {
                    ispagin: 'ispagin',
                    title: '北方演艺集团党委召开第二次党员代表大会'
                  },
                  component: () => import('./views/performing/reviews')
                }
              ]
            }
          ]
        },
        {
          path: '/exhibition',
          name: 'exhibition',
          meta: {
            id: 2,
            title: '精品展示'
          },
          component: () => import('./views/exhibition'),
          children: [
            {
              path: '/exhibition/exhibitions',
              name: 'exhibitions',
              meta: {
                id: 2,
                title: '黄河大合唱'
              },
              component: () => import('./views/exhibitions')
            }
          ]
        },
        {
          path: '/star/virtuoso',
          name: 'star',
          meta: {
            id: 3,
            title: '名家新星'
          },
          component: () => import('./views/performing/performing'),
          children: [
            {
              path: '/star/virtuoso',
              name: 'virtuoso',
              meta: {
                id: 3,
                title: '艺术名家'
              },
              component: () => import('./views/star/virtuoso'),
              children: [
                {
                  path: '/star/virtuoso/starts',
                  name: '夏青2',
                  meta: {
                    ispagin: 'ispagin',
                    title: '夏青'
                  },
                  component: () => import('./views/star/starts')
                }
              ]
            },
            {
              path: '/star/stage',
              name: 'stage',
              meta: {
                id: 3,
                title: '舞台新星'
              },
              component: () => import('./views/star/stage'),
              children: [
                {
                  path: '/star/stage/starts',
                  name: '夏青1',
                  meta: {
                    ispagin: 'ispagin',
                    title: '夏青'
                  },
                  component: () => import('./views/star/starts')
                }
              ]
            },
            {
              path: '/star/interview',
              name: 'interview',
              meta: {
                id: 3,
                title: '星专访'
              },
              component: () => import('./views/star/interview'),
              children: [
                {
                  path: '/star/interview/starts',
                  name: '夏青',
                  meta: {
                    ispagin: 'ispagin',
                    title: '夏青'
                  },
                  component: () => import('./views/star/starts')
                }
              ]
            }

          ]
        },
        {
          path: '/development/service',
          name: 'development',
          meta: {
            id: 4,
            title: '演艺拓展'
          },
          component: () => import('./views/development/development'),
          children: [
            {
              path: '/development/service',
              name: 'service',
              meta: {
                id: 4,
                ispagin: 'ispagin',
                title: '舞美服务'
              },
              component: () => import('./views/development/service')
            },
            {
              path: '/development/training',
              name: 'training',
              meta: {
                id: 4,
                ispagin: 'ispagin',
                title: '艺术培训'
              },
              component: () => import('./views/development/training')
            },
            {
              path: '/development/integration',
              name: 'integration',
              meta: {
                id: 4,
                title: '文旅融合'
              },
              component: () => import('./views/development/integration')
            }
          ]
        },
        {
          path: '/building/activities',
          name: 'building',
          meta: {
            id: 5,
            title: '党的建设'
          },
          component: () => import('./views/building/building'),
          children: [
            {
              path: '/building/activities',
              name: 'activities',
              meta: {
                id: 5,
                title: '党建活动'
              },
              component: () => import('./views/building/activities'),
              children: [
                {
                  path: '/building/activities/activitiess',
                  name: 'activitiess',
                  meta: {
                    ispagin: 'ispagin',
                    title: '重温峥嵘岁月'
                  },
                  component: () => import('./views/building/activitiess')
                }
              ]
            },
            {
              path: '/building/spirit',
              name: 'spirit',
              meta: {
                id: 5,
                title: '企业精神'
              },
              component: () => import('./views/building/spirit'),
              children: [
                {
                  path: '/building/spirit/spirits',
                  name: 'spirits',
                  meta: {
                    ispagin: 'ispagin',
                    title: '重温峥嵘岁月'
                  },
                  component: () => import('./views/building/spirits')
                }
              ]
            }
          ]
        }
      ]
    }

  ]
})
