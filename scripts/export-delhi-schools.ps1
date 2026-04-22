$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$workspace = "D:\Backup Drive\OneDrive\Documents\New project 2"
$outputDir = Join-Path $workspace "data"
if (-not (Test-Path -LiteralPath $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
}

$pages = @(
    @{ Category = "Government Schools"; Url = "https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=8v6AC39/z0ySjVIkvfDJzvxkdDvmSsz7pgALKMjL3UI=" },
    @{ Category = "MCD Schools"; Url = "https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=t5PRKC9ILXruG7UivWYTAg==" },
    @{ Category = "NDMC Schools"; Url = "https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=VA6UFLm6lR61kUAjmEYk1A==" },
    @{ Category = "KVS Schools"; Url = "https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=lXlwjVjcCx9Nzs7wocJuKw==" },
    @{ Category = "DCB Schools"; Url = "https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=r07xyen4DvulYLKsFFmG7g==" },
    @{ Category = "JNV Schools"; Url = "https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=7zDDKS+6hGXDeZbAq/qnwg==" },
    @{ Category = "DSW Schools"; Url = "https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=EICVFggVowSMcYXkhjk3jA==" },
    @{ Category = "Jamia Millia Islamia Schools"; Url = "https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=OSshHwEP1R9wVX1AY2F2x7l+Ow7pdM0NlfRLEmcGOcAZBp6KMD/lQLxOvt0wdZBc" },
    @{ Category = "Government Aided Schools"; Url = "https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=0DuOiH2xDTgRFnzeAM+5HA==" },
    @{ Category = "MCD Aided Schools"; Url = "https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=uuC2Xs0+fzEHeN+Gl/MjfaDuAGByegJUseQpChxVZfg=" },
    @{ Category = "NDMC Aided Schools"; Url = "https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=dcXZ2PaGXFsfKoub464FwsiGf4LdaMjHx5Ib1lfGAU0=" },
    @{ Category = "Public Schools Recognised by DOE"; Url = "https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=nTH2RniV/856b7vqlJz82MWFG0Y5sfJown1h2Tv10v0=" },
    @{ Category = "Public Schools Recognised by MCD"; Url = "https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=7nt/YqWsGPyGj3AOgCiCrLYR9/hJMh+cHN5ryz9gZxQ=" },
    @{ Category = "NDMC Recognized Schools"; Url = "https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=OdlUaX7edkWsG3WYDMxp2N5KHxXNNTKW74jg2AWNtfI=" },
    @{ Category = "DCB Recognized Schools"; Url = "https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=5B1aCT+NwJcUvhMOIiIZVhEf4ZXJGOQJqz6M2gvJMzw=" },
    @{ Category = "DOE RTE 1-8 Elementary"; Url = "https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=nTH2RniV/856b7vqlJz82IhrSGpAqr63vMJ1eA9NkD1BETO0JNRqOMaAOpCX/By2" },
    @{ Category = "DOE RTE 1-5 Primary"; Url = "https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=7nt/YqWsGPyGj3AOgCiCrKZTnpOeW5rSooCGg9Z0PPldktYp+TuH5c3ExQ8fc1M/" }
)

function Get-CellText {
    param([string]$HtmlFragment)

    $text = $HtmlFragment -replace '<br\s*/?>', ' '
    $text = $text -replace '<[^>]+>', ' '
    $text = [System.Net.WebUtility]::HtmlDecode($text)
    return ($text -replace '\s+', ' ').Trim()
}

$allRows = New-Object System.Collections.Generic.List[object]
$summary = New-Object System.Collections.Generic.List[object]

foreach ($page in $pages) {
    $response = Invoke-WebRequest -Uri $page.Url -UseBasicParsing -TimeoutSec 60
    $rows = [regex]::Matches($response.Content, '<tr[^>]*>(.*?)</tr>', 'Singleline,IgnoreCase')
    if ($rows.Count -lt 3) {
        continue
    }

    $headers = [regex]::Matches($rows[1].Groups[1].Value, '<t[dh][^>]*>(.*?)</t[dh]>', 'Singleline,IgnoreCase') |
        ForEach-Object { Get-CellText $_.Groups[1].Value }

    $categoryCount = 0

    foreach ($row in $rows | Select-Object -Skip 2) {
        $cells = [regex]::Matches($row.Groups[1].Value, '<t[dh][^>]*>(.*?)</t[dh]>', 'Singleline,IgnoreCase') |
            ForEach-Object { Get-CellText $_.Groups[1].Value }

        if ($cells.Count -ne $headers.Count) {
            continue
        }

        if (-not ($cells[0] -match '^\d+$')) {
            continue
        }

        $record = [ordered]@{
            Category        = $page.Category
            SerialNo        = ""
            District        = ""
            Zone            = ""
            LocalZone       = ""
            SchoolID        = ""
            UDISECode       = ""
            BuildingID      = ""
            SchoolName      = ""
            Address         = ""
            Shift           = ""
            SchoolLevel     = ""
            Gender          = ""
            Phone           = ""
            ContactPerson   = ""
            Latitude        = ""
            Longitude       = ""
            SourceURL       = $page.Url
        }

        for ($i = 0; $i -lt $headers.Count; $i++) {
            switch -Regex ($headers[$i]) {
                '^S\.?No$'          { $record.SerialNo = $cells[$i]; continue }
                '^District$'        { $record.District = $cells[$i]; continue }
                '^Zone$'            { $record.Zone = $cells[$i]; continue }
                '^MCD ZONE$'        { $record.LocalZone = $cells[$i]; continue }
                '^School ID$'       { $record.SchoolID = $cells[$i]; continue }
                '^UDISE Code$'      { $record.UDISECode = $cells[$i]; continue }
                '^Buildingid$'      { $record.BuildingID = $cells[$i]; continue }
                '^School Name$'     { $record.SchoolName = $cells[$i]; continue }
                '^Address$'         { $record.Address = $cells[$i]; continue }
                '^Shift$'           { $record.Shift = $cells[$i]; continue }
                '^SchoolLevel$'     { $record.SchoolLevel = $cells[$i]; continue }
                '^Gender$'          { $record.Gender = $cells[$i]; continue }
                '^Phone$'           { $record.Phone = $cells[$i]; continue }
                '^Hos Name$'        { $record.ContactPerson = $cells[$i]; continue }
                '^Latitude$'        { $record.Latitude = $cells[$i]; continue }
                '^Longitude$'       { $record.Longitude = $cells[$i]; continue }
            }
        }

        $allRows.Add([pscustomobject]$record)
        $categoryCount++
    }

    $summary.Add([pscustomobject]@{
        Category = $page.Category
        Count = $categoryCount
        SourceURL = $page.Url
    })
}

$csvPath = Join-Path $outputDir "delhi_official_school_directory.csv"
$summaryPath = Join-Path $outputDir "delhi_official_school_directory_summary.csv"

$allRows |
    Sort-Object Category, District, SchoolName |
    Export-Csv -LiteralPath $csvPath -NoTypeInformation -Encoding UTF8

$summary |
    Export-Csv -LiteralPath $summaryPath -NoTypeInformation -Encoding UTF8

$xlsxPath = Join-Path $outputDir "delhi_official_school_directory.xlsx"
$xlsxCreated = $false

try {
    $excel = New-Object -ComObject Excel.Application
    $excel.Visible = $false
    $excel.DisplayAlerts = $false
    $workbook = $excel.Workbooks.Open($csvPath)
    $worksheet = $workbook.Worksheets.Item(1)
    $worksheet.Name = "Delhi Schools"
    $worksheet.Columns.AutoFit() | Out-Null
    $workbook.SaveAs($xlsxPath, 51)
    $workbook.Close($false)
    $excel.Quit()
    [System.Runtime.InteropServices.Marshal]::ReleaseComObject($worksheet) | Out-Null
    [System.Runtime.InteropServices.Marshal]::ReleaseComObject($workbook) | Out-Null
    [System.Runtime.InteropServices.Marshal]::ReleaseComObject($excel) | Out-Null
    $xlsxCreated = $true
} catch {
    if ($excel) {
        try { $excel.Quit() } catch {}
    }
}

Write-Output ("Rows: {0}" -f $allRows.Count)
Write-Output ("CSV: {0}" -f $csvPath)
Write-Output ("Summary: {0}" -f $summaryPath)
if ($xlsxCreated) {
    Write-Output ("XLSX: {0}" -f $xlsxPath)
} else {
    Write-Output "XLSX: not created"
}
