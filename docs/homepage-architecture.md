# Homepage Architecture

The homepage body follows the supplied reference chronologically:

1. Opening
2. Feature + support
3. Dense recommendation
4. Central feature
5. Reserved
6. Five-column collection
7. Feature chapter

Global desktop calibration:
- approximately 1320px content field
- approximately 60px outer margins at 1440px
- approximately 20–30px gutters
- 3/6/3 for central-feature compositions
- 8/4 for dominant feature/support composition
- 5 equal columns for the dense collection

Do not force every section into the same component shape.

Shared primitives should be introduced only when they genuinely repeat:
- editorial story text block
- dominant feature panel
- compact story row
- section title + rule
- collection column
- support panel

Use CSS grid/flex and intrinsic sizing. No arbitrary absolute offsets.

Mobile:
- feature first
- side stories follow in logical reading order
- dense collections become sequential groups
- imagery remains important

Tablet:
- intermediate responsive composition using the same DOM/component system.
