registerLayout('waterfall', class {
    static get inputProperties() {
        return [ '--padding', '--columns' ];
    }
    *intrinsicSizes(children, edges, styleMap) {}
    *layout(children, edges, constraints, styleMap) {
        const inlineSize = constraints.fixedInlineSize;

        const padding = parseInt(styleMap.get('--padding').toString());
        const columnValue = styleMap.get('--columns').value;

        // Layout all children with simply their column size.
        const childInlineSize = (inlineSize - ((columnValue + 1) * padding)) / columnValue;
        const childFragments = yield children.map((child) => {
            
            const childFg = child.layoutNextFragment({
                fixedInlineSize: childInlineSize,
                fixedBlockSize: 2000
            });
            console.log('width:', childFg.inlineSize)
            return childFg;
        });

        let autoBlockSize = 0;
        const columnOffsets = Array(columnValue).fill(0);
        // for (let childFragment of childFragments) {
        //     // Select the column with the least amount of stuff in it.
        //     const min = columnOffsets.reduce((acc, val, idx) => {
        //         if (!acc || val < acc.val) {
        //         return {idx, val};
        //         }
        
        //         return acc;
        //     }, {val: +Infinity, idx: -1});
        
        //     childFragment.inlineOffset = padding + (childInlineSize + padding) * min.idx;
        //     childFragment.blockOffset = padding + min.val;
        
        //     columnOffsets[min.idx] = childFragment.blockOffset + childFragment.blockSize;
        //     autoBlockSize = Math.max(autoBlockSize, columnOffsets[min.idx] + padding);
        // }

        console.log(inlineSize, padding, columnValue)

        return {autoBlockSize, childFragments};
    }
});
