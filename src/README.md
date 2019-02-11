## Outline

**Title:** Making ReactJS Wicked Fast
**Summary:** React is already fast, but sometimes we need to squeeze out more power. We'll look at common reasons why React is runs slow, and how we can detect these issues.
**Outline:**

- What happens when React needs to rerender (reconciliation)
- PureComponent vs Component
- Not everything is state/props (these values changing can cause unneeded renders)
- Memoize computed props
- Keys
- ShouldComponentUpdate()
- React Dev Tools
