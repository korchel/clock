export const Filter = () => (
  <filter id="glow" y="-10" x="-10" width="250" height="150">
    <feOffset in="StrokePaint" dx="0" dy="0" result="centeredOffset"></feOffset>

    <feGaussianBlur
      in="centeredOffset"
      stdDeviation="2"
      result="blur1"
    ></feGaussianBlur>
    <feGaussianBlur
      in="centeredOffset"
      stdDeviation="5"
      result="blur2"
    ></feGaussianBlur>
    <feGaussianBlur
      in="centeredOffset"
      stdDeviation="15"
      result="blur3"
    ></feGaussianBlur>

    <feMerge>
      <feMergeNode in="blur1"></feMergeNode>
      <feMergeNode in="blur2"></feMergeNode>
      <feMergeNode in="blur3"></feMergeNode>

      <feMergeNode in="SourceGraphic"></feMergeNode>
    </feMerge>
  </filter>
);
