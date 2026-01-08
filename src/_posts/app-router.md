---
title: Next.js App Router 도입 - 실무 적용 사례와 마이그레이션 여정
excerpt: Next.js의 App Router로 마이그레이션 해나가는 과정에 대해 기록한다.
date: '2025-02-21'
---

회사에서 담당하고 있는 서비스 중 Next.js Pages Router를 사용하는게 있었다. 이를 App Router로 전환하는 과정에 대해 기록한다. App Router 관련한 자세한 내용은 공식문서에 잘 나와있고, 수많은 블로그에서 찾아볼 수 있기 때문에 이 글에서는 자세히 다루지 않는다.

## App Router 전환 배경

해외 사용자를 대상으로 하는 서비스였기 때문에 네트워크 환경이 우리나라와는 다를거라 생각했다. 해외에서도 쾌적한 서비스 경험을 제공하기 위해서 성능 최적화가 필요하다고 생각했다. App Router를 사용하면 서버 컴포넌트나 스트리밍 등 성능 최적화를 위한 기능들을 사용할 수 있다. 또한 프로젝트의 규모도 적당하고, 시간도 여유가 있어서 팀원들과 협의 후에 도입해보기로 결정했다.


## 마이그레이션 과정
### 1. 폴더 구조 변경
App Router로의 변경은 페이지 단위로 점진적으로 진행이 가능하다. 따라서 기존 Pages Router 기반의 폴더 구조를 그대로 두고, 새로운 App Router 기반의 폴더 구조를 추가하는 방식으로 진행했다. 기본적인 가이드는 [공식 문서](https://nextjs.org/docs/14/app/building-your-application/upgrading/app-router-migration)에 자세하게 나와있어 그대로 따라하면 된다.

### 2. vanilla-extract 도입
프로젝트에서 스타일링을 위해 emotion을 사용하고 있었다. emotion은 스타일링을 위해 내부적으로 context를 사용하고 있었고, 이는 서버컴포넌트에서 사용할 때 문제가 된다. 따라서 새로운 스타일링 도구를 찾아야했다.

서버컴포넌트에서 활용할 수 있는 스타일링 도구는 css module, tailwindcss, vanilla-extract, stylex 등 여러 가지가 있다.

이 중에서 Vanilla Extract를 선택했다. Vanilla Extract github을 보면 Zero-runtime Stylesheets in TypeScript라고 소개하고있다. 말그대로 런타임이 아닌 빌드 타임에 스타일을 생성하고, 스타일 요소들을 Type safe하게 작성할 수 있다. 물론 Vanilla Extract에서 제공하는 몇가지 유틸 패키지를 통해서 dynamic style도 작성이 가능하다. 


다른 도구들의 경우 프로젝트에 적용하기 아쉬운 점들이 있었다. 먼저 css module의 경우 사내에서 공통으로 사용하는 ui 모듈의 테마나 타이포그래피 등을 객체로 관리하고 있었는데 이 부분을 하나 하나 다시 정의하는 과정이 필요했다. tailwindcss의 경우 본인을 포함한 팀원의 대부분이 사용해본적은 있지만 그다지 좋은 경험을 갖고 있지 않았다. 개인적으로 불편했던 점은 스타일 요소가 dom 관련 요소들과 혼재되면서 스타일이 늘어날수록 가독성이 너무 떨어진다는 점, css 속성이 tailwindcss에서는 어떤 네이밍으로 사용되는지 확인해야하는 점, 사이즈 단위를 xs, s, md 등의 형태로 제공하고, 커스텀 스타일을 위해서는 `top-[100px]` 형태로 작성하거나 추가적인 설정이 필요한점 등이 있었다. stylex와 Vanilla Extract의 경우 둘 다 제로 런타임에 type safe한 방식을 사용하는 등 비슷한 특징을 가지고 있는데 팀원의 절반정도가 Vanilla Extract 사용 경험이 있었고, npm Weekly Downloads 가 압도적으로 Vanilla Extract가 많았기 때문에 레퍼런스도 stylex 보다는 많을거라는 생각해 Vanilla Extract를 사용하기로 결정했다.

주관적일 수도 있지만 Vanilla Extract의 특징으로 인한 장점 외에 사용하면서 좋았던 점이 있다.

1. 스타일 요소가 별도의 파일로 분리되면서 가독성이 좋아졌다. 예를들어 스타일드 컴포넌트를 사용할 경우 대충 아래와 같은 형태라고 가정해보자. 각 컴포넌트가 어떤 태그로 만들어졌는지 알기 위해서는 스타일드 컴포넌트가 정의된 부분을 확인해봐야하기도하고, 스타일드 컴포넌트인지 아니면 그냥 일반 컴포넌트인지도 한눈에 파악할 수 없다.

```tsx
const Component = () => {
  return (
    <StyledA>
      <StyledB>hello</StyledB>
    </StyledA>

    <StyledC>
      <StyledD>
        <Price />
      </StyledD>
    </StyledC>
  )
}
```

하지만 Vanilla Extract를 사용할 경우 아래와 같이 스타일 요소가 별도의 파일로 분리되어 dom의 구조가 그대로 드러난다. 이에 따라 잘못 작성된 태그가 한눈에 들어오기도 하고, 별도의 컴포넌트도 바로 구분이 가능해 가독성이 좋다고 느껴졌다.

```tsx
const Component = () => {
  return (
    <header className={header}>
      <h1>
    <header>

    <section className={section}>
      <div className={priceWrapper}>
        <Price />
      </div>
    </section>
  )
}
```

2. 현재 클래스 외의 엘리먼트에 스타일링을 할 수 없는 점도 장점으로 느껴졌다. 지금까지 사용했던 스타일링 도구와는 다른 부분이라 처음에는 어색했지만 오히려 좋은점이라고 생각한다. 특정 요소의 스타일이 외부 요소에 의해 영향을 받아 문제가 됐던 경험은 대부분 있을거라고 생각한다. 하지만 Vanilla Extract에서는 특정 요소의 스타일을 외부 요소가 제어할 수 없게 되어있어 오히려 안정적이라는 생각이 들었다.

```typescript
import { style } from '@vanilla-extract/css';

// Invalid example:
export const child = style({});
export const parent = style({
  selectors: {
    [`& ${child}`]: {...}
  }
});

// Valid example:
export const parent = style({});
export const child = style({
  selectors: {
    [`${parent} &`]: {...}
  }
});
```

### 3. 서버 컴포넌트 분리
기본적인 마이그레이션을 진행하고, Vanilla Extract를 적용하면 이제 서버 컴포넌트를 사용할 수 있다. 사실 use client를 여기저기 붙여놓으면 App Router 마이그레이션이 끝나긴한다. 하지만 App Router에서부터 서버 컴포넌트 활용이 가능하기에 적절히 컴포넌트를 분리하는 작업이 필요하다.

이 부분은 한마디로 설명하기는 어렵다. 프로젝트마다 상황이 다르고, 

```typescript
// app/posts/page.tsx
async function PostsPage() {
  const posts = await fetchPosts(); // 서버에서 직접 데이터 fetching
  return <PostList posts={posts} />;
}
```

서버 컴포넌트에서 직접 데이터를 가져올 수 있어 코드가 더 간결해졌습니다.

## 겪었던 어려움

