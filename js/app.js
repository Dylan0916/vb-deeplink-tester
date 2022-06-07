new Vue({
  el: '#vm',
  data: {
    link: '',
    envType: 'staging',
  },
  computed: {
    origin() {
      switch (this.envType) {
        case 'production':
          return 'https://www.verybuy.cc';
        case 'testing':
          return 'https://www-testing.verybuy.cc';
        case 'staging':
        default:
          return 'https://sa.www.verybuy.io';
      }
    },
    displayList() {
      return [
        {
          title: '新款韓國東大門香水瓶百搭數字大牌耳環耳釘流蘇格子蝴蝶結耳飾品',
          url: `${this.origin}/user_submit/item/71681`,
        },
        {
          title: '搜尋：連衣裙',
          url: `${this.origin}/search/user_submit/%E9%80%A3%E8%A1%A3%E8%A3%99`,
        },
        {
          title: '搜尋：褲子',
          url: `${this.origin}/search/user_submit/%E8%A4%B2%E5%AD%90`,
        },
        {
          title: '搜尋：竹節棉 (with utm)',
          url: `${this.origin}/search/user_submit/%E7%AB%B9%E7%AF%80%E6%A3%89/top/4374096?utm_source=line&utm_medium=message&utm_campaign=mgm&utm_term=20200326`,
        },
        {
          title: '搜尋：竹節棉 (with filter)',
          url: `${this.origin}/search/user_submit/%E7%AB%B9%E7%AF%80%E6%A3%89/top/4374096?isHistoryWordApplied=true&maxPrice=1500&minPrice=1000&sortBy=updated_at&sortName=每週熱門#8cad6f0ee5f062ed70ac263e102334b6`,
        },
        {
          title: '購物車',
          url: `${this.origin}/member/cart`,
        },
        {
          title: '活動專區頁',
          url: `${this.origin}/member/event`,
        },
        {
          title: 'user_submit item 短網址',
          url: `https://bit.ly/2K1gjfA`,
        },
        {
          title: 'Scheme',
          url: `verybuy201109://`,
        },
        {
          title: 'user_submit list',
          url: `${this.origin}/user_submit/list`,
        },
        {
          title: 'Search with Top',
          url: `${this.origin}/search/user_submit/%E7%89%9B%E4%BB%94/top/75003-74879-74882-73987-70527-68893-71284?utm_source=line&utm_medium=message&utm_campaign=regularWed&utm_content=image&utm_term=20190717&openExternalBrowser=1`,
        },
        {
          title: '團購主題頁 (app)',
          url: `${this.origin}/tuango/theme/app/2019_1111_festival_campaign`,
        },
        {
          title: '團購主題頁 (no app)',
          url: `${this.origin}/tuango/theme/2019_1111_festival_campaign`,
        },
      ];
    },
  },
});
