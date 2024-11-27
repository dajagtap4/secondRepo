import { test, expect } from '@playwright/test';

test.beforeEach( async ({ page }) => {
  await page.route('https://www.irctc.co.in/eticketing/protected/mapps1/altAvlEnq/TC', async route => {
    const tags = {
        "trainBtwnStnsList": [
            {
                "trainNumber": "12345",
                "trainName": "PUNE Israel EXP",
                "fromStnCode": "PUNE",
                "toStnCode": "Israel",        
                "runningSat": "Y",
                "runningSun": "Y",
               
                "atasOpted": "false",
                "flexiFlag": "false",
                "trainOwner": "0",
                "trainsiteId": "B"
            }
        ]
    }
  })

  await page.goto('www.irctc.co.in/nget/booking/train-list');

})

test('get started link', async ({ page }) => {
   
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  
  });
  